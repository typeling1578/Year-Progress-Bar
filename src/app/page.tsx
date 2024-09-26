"use client";

import RootElement from "@/components/RootElement";
import { useEffect, useState } from "react";

export default function Home() {
  const theme = {
    progress_foreground: "#00a8ff",
    progress_background: "#e3e3ef",
  };

  const [ year, setYear ] = useState<number>();
  const [ percent, setPercent ] = useState<string>("");
  const [ isEnded, setIsEnded ] = useState<boolean>(false);
  const [ showNextYearButton, setShowNextYearButton ] = useState<boolean>(false);

  useEffect(() => {
    if (isEnded) {
      return;
    }

    const decimal_digits = 6;
    const update_date_interval_time = 50;

    let isUpdating = false;
    let old_year = new Date().getFullYear();

    const update = () => {
      if (isUpdating) {
        return;
      }
      isUpdating = true;

      const now_date = new Date();
      if(
        /*基本は年が変わったことを検知して100%にする*/
        old_year < now_date.getFullYear() ||
        /*もしold_yearの値がおかしくなった場合の対策コード*/
        (
            now_date.getMonth() == 0 &&
            now_date.getDate() == 1 &&
            now_date.getHours() == 0 &&
            now_date.getMinutes() == 0 &&
            (
                now_date.getSeconds() == 0 ||
                now_date.getSeconds() == 1
            )
        ) || (window as { [key: string]: any }).testNewYear
      ) {
        // New Year
        clearInterval(interval);

        setYear(now_date.getFullYear() - 1); // old_yearの値がおかしくなった場合のことを考慮して (現在の年 - 1) する
        setPercent("100");

        setTimeout(() => {
          setShowNextYearButton(true);
        }, 3000);

        setIsEnded(true);
      } else {
        // not New Year
        const now_year = now_date.getFullYear();

        const next_year_timestamp = new Date(now_year + 1, 1 - 1, 1, 0, 0, 0).getTime();
        const now_year_timestamp = new Date(now_year, 1 - 1, 1, 0, 0, 0).getTime();

        const oneyear_time = next_year_timestamp - now_year_timestamp; // 1年の時間
        const until_next_year_time = next_year_timestamp - now_date.getTime(); // 次の年までの時間

        const p = 100 - until_next_year_time / oneyear_time * 100; // 100 - 次の年までの時間 / 1年の時間 * 100 = 今年の完了度

        setYear(now_year);
        setPercent((Math.floor(p * (10**decimal_digits)) / (10**decimal_digits)).toFixed(decimal_digits));
      }

      old_year = now_date.getFullYear();
      isUpdating = false;
    }

    const interval = setInterval(update, update_date_interval_time);

    update();

    return () => {
      clearInterval(interval);
    }
  }, [isEnded]);

  const startNextYear = () => {
    setShowNextYearButton(false);
    setIsEnded(false);
  }

  return (
    <RootElement>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 text-center">
        <h1 data-name="Title" className="text-[32px] font-extrabold">Year Progress Bar</h1>

        <div
          data-name="Progress Bar"
          className="w-full max-w-2xl h-16 rounded-md"
          style={{
            background: `linear-gradient(to right,
              ${theme.progress_foreground} 0%, ${theme.progress_foreground} ${percent}%,
              ${theme.progress_background} ${percent}%, ${theme.progress_background} 100%
            )`
          }}
        ></div>

        <div
          data-name="Message"
          className="text-xl font-semibold tabular-nums"
        >
          {year} is {percent}% complete{percent === "100" ? "!" : "."}
        </div>

        <input
          data-name="Go to next year button"
          className={`${showNextYearButton ? "": "invisible"} p-2 rounded-xl`}
          style={{ backgroundColor: "rgba(128, 128, 128, 0.6)" }}
          type="button"
          value="Show next year's progress bar"
          onClick={startNextYear}
        ></input>
      </div>
    </RootElement>
  );
}

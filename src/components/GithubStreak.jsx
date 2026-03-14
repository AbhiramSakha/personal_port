import { useEffect, useState } from "react";

const GITHUB_USERNAME = "AbhiramSakha";

export default function GithubStreak() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    async function fetchContributions() {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`
      );

      const data = await res.json();

      let currentStreak = data.contributionsCollection.contributionCalendar
        .weeks.flatMap((week) => week.contributionDays)
        .reverse();

      let streakCount = 0;

      for (let day of currentStreak) {
        if (day.contributionCount > 0) {
          streakCount++;
        } else {
          break;
        }
      }

      setStreak(streakCount);
    }

    fetchContributions();
  }, []);

  return (
    <div className="p-6 rounded-xl bg-black/40 text-center">
      <h3 className="text-xl text-emerald-400 mb-2">Current GitHub Streak</h3>
      <p className="text-4xl font-bold text-white">{streak}</p>
      <p className="text-gray-400">days</p>
    </div>
  );
}

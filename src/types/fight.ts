import type { FightTimeline } from "./fight-timeline";

export type Fight = {
  id: string;
  name: string;
  endTime: number;
  timeline: FightTimeline;
};

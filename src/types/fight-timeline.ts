export type FightTimeline = {
  [timestamp: number]: {
    type: string;
    abilityName: string;
    abilityIcon: string;
  };
};

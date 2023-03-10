const giantSquidStartTimeStr = 'Fri, 10 Mar 2023 04:30:10 GMT';
const giantSquidEndTimeStr = 'Fri, 10 Mar 2023 23:08:10 GMT';
interface ITimeDuring {
  (timeStr: string, startTimeStr: string, endTimeStr: string): boolean;
}
interface ITimeGiantDuring {
  (): boolean;
}
export const giantSquidTimeDuring: ITimeGiantDuring = () => {
  return judgeDuringTime(new Date().toUTCString(), giantSquidStartTimeStr, giantSquidEndTimeStr);
};
export const judgeDuringTime: ITimeDuring = (
  timeStr: string,
  startTimeStr: string,
  endTimeStr: string,
) => {
  const targetTimeStamp = new Date(timeStr).getTime();
  const startTimeStamp = new Date(startTimeStr).getTime();
  const endTimeStamp = new Date(endTimeStr).getTime();
  if (targetTimeStamp <= endTimeStamp && targetTimeStamp >= startTimeStamp) {
    return true;
  }
  return false;
};

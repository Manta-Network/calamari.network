const giantSquidStartTimeStr = 'Thu Mar 16 2023 00:00:00 GMT+0800 (中国标准时间)';
const giantSquidEndTimeStr = 'Fri Mar 31 2023 00:00:00 GMT+0800 (中国标准时间)';
interface ITimeDuring {
  (timeStr: string, startTimeStr: string, endTimeStr: string): boolean;
}
interface ITimeGiantDuring {
  (): boolean;
}
export const giantSquidTimeDuring: ITimeGiantDuring = () => {
  return judgeDuringTime(
    new Date().toUTCString(),
    new Date(giantSquidStartTimeStr).toUTCString(),
    new Date(giantSquidEndTimeStr).toUTCString(),
  );
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

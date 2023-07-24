import {FormData, DataItem, CombinedData} from '../interfaces/interfaces';

export const combineDataAndRemoveDuplicates = (
  referralDataFromState: FormData[],
  referralDataFromDb: DataItem[],
): CombinedData[] => {
  const combinedData: CombinedData[] = [];

  for (const obj1 of referralDataFromState) {
    combinedData.push({
      ...obj1,
      _id: '',
      __v: 0,
    });
  }

  for (const obj2 of referralDataFromDb) {
    combinedData.push(obj2);
  }

  const uniqueEmails = new Set<string>();
  const uniqueObjects: CombinedData[] = [];

  combinedData.forEach(obj => {
    if (!uniqueEmails.has(obj.email)) {
      uniqueEmails.add(obj.email);
      uniqueObjects.push(obj);
    }
  });

  return uniqueObjects;
};

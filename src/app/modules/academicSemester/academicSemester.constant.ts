import {
  IMonth,
  TAcademicSemesterNameCode,
} from './academicSemester.interface';

export const MonthSchema: IMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterNameCodeMapper: TAcademicSemesterNameCode = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

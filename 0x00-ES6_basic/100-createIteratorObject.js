export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const expanded = [];
  // expand and flatten employee values
  for (const item of employees) {
    expanded.push(...item);
  }
  return expanded;
}

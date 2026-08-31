# Easiest TypeScript (JavaScript) solution

**Author:** user8285fp
**Votes:** 1
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/2309869/](https://leetcode.com/problems/making-file-names-unique/solutions/2309869/)

---

The easiest TypeScript solution is
```
function getFolderNames(names: string[]): string[] {
  const reserved = new Set<string>();

  return names.map((name) => {
    let k = 0;
    let possibleName = name;
    while (reserved.has(possibleName)) {
      k++;
      possibleName = `${name}(${k})`;
    }

    reserved.add(possibleName);
    return possibleName;
  });
}
```
# ✅ ✅ TypeScript Solution Beats 100% ✅ ✅

**Author:** arturKulish
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/4688585/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/4688585/)

---



# Code
```

const minimumBuckets = (hamsters: string): number => {
  let arr = [...hamsters];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "H") {
      if(hamsters[i - 1] === '.' || hamsters[i + 1] === '.'){
        if (arr[i - 1] == "B") continue;
        else if (arr[i + 1] == "H") {
            arr[i - 1] = "B";
            count++;
        } else {
            arr[i + 1] = "B";
            count++;
        }
      }  else {
          return -1;
      }
    }
  }

  return count;
};
```
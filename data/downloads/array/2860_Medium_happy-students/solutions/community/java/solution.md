# sorting + simple checking

**Author:** FLlGHT
**Votes:** 12
**Link:** [https://leetcode.com/problems/happy-students/solutions/4054255/](https://leetcode.com/problems/happy-students/solutions/4054255/)

---

## Java

```
public int countWays(List<Integer> nums) {
    Collections.sort(nums);
    int ways = nums.get(0) == 0 ? 0 : 1;
    for (int i = 0; i < nums.size(); ++i) {
      int countWith = i + 1;

      if (countWith > nums.get(i) && (i + 1 == nums.size() || countWith < nums.get(i + 1)))
        ways++;
    }

    return ways;
  }
```


## C++
```

public:
    int countWays(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int ways =  nums[0] > 0;
    for (int i = 0; i < nums.size(); ++i) {
      int count_with = i + 1;

      if (count_with > nums[i] && (i + 1 == nums.size() || count_with < nums[i + 1]))
        ways++;
    }

    return ways;
}
```
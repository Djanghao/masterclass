# Solution

**Author:** deleted_user
**Votes:** 485
**Link:** [https://leetcode.com/problems/sort-colors/solutions/3164333/](https://leetcode.com/problems/sort-colors/solutions/3164333/)

---

```C++ []
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int l = 0;
        int m = 0;
        int h = nums.size()-1;

        while(m<=h){
            if(nums[m]==0){
                swap(nums[l], nums[m]);
                l++;
                m++;
            }
            else if(nums[m]==1){
                m++;
            }
            else if(nums[m]==2){
                swap(nums[m], nums[h]);
                h--;
            }
        }
    }
};
```

```Python3 []
class Solution:
    def sortColors(self, nums: List[int]) -> None:

        red, white, blue = 0, 0, len(nums) - 1

        while white <= blue:
            if nums[white] == 0:
                nums[white], nums[red] = nums[red], nums[white]
                red += 1
                white += 1
            elif nums[white] == 1:
                white += 1
            else:
                nums[white], nums[blue] = nums[blue], nums[white]
                blue -= 1
```

```Java []
class Solution {
  public void sortColors(int[] nums) {
    int l = 0;
    int r = nums.length - 1;

    for (int i = 0; i <= r;)
      if (nums[i] == 0)
        swap(nums, i++, l++);
      else if (nums[i] == 1)
        ++i;
      else
        swap(nums, i, r--);
  }

  private void swap(int[] nums, int i, int j) {
    final int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}
```

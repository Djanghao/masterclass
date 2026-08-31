# Python O(n) 1 pass in-place solution with explanation

**Author:** girikuncoro
**Votes:** 1376
**Link:** [https://leetcode.com/problems/sort-colors/solutions/26481/](https://leetcode.com/problems/sort-colors/solutions/26481/)

---

This is a [dutch partitioning problem][1]. We are classifying the array into four groups: red, white, unclassified, and blue. Initially we group all elements into unclassified. We iterate from the beginning as long as the white pointer is less than the blue pointer. 

If the white pointer is red (nums[white] == 0), we swap with the red pointer and move both white and red pointer forward. If the pointer is white (nums[white] == 1), the element is already in correct place, so we don't have to swap, just move the white pointer forward. If the white pointer is blue, we swap with the latest unclassified element.


    def sortColors(self, nums):
        red, white, blue = 0, 0, len(nums)-1
        
        while white <= blue:
            if nums[white] == 0:
                nums[red], nums[white] = nums[white], nums[red]
                white += 1
                red += 1
            elif nums[white] == 1:
                white += 1
            else:
                nums[white], nums[blue] = nums[blue], nums[white]
                blue -= 1
                
                


  [1]: https://en.wikipedia.org/wiki/Dutch_national_flag_problem
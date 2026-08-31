# very simple solution using bitarray

**Author:** dwluciano
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2905385/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2905385/)

---

# Intuition
Use an array to keep the indexes of the videos that has been uploaded, and a variable llp (Last Longest Prefix) to keep the last longer prefix

# Approach
Use bit array to keep the indexes of the uploaded videos, and precalculate the LUP on each upload, this means to loop through the bit array until a non uploaded video is found. 

# Complexity
- Time complexity:
**Constructor**: $$O(1)$$
**Upload**: $$O(1)$$
**Longest**: $$O(1)$$

- Space complexity:
**Constructor**: $$O(n)$$, one bit per each __ith__ video
**Upload**: $$O(1)$$
**Longest**: $$O(1)$$

# Code
```
public class LUPrefix {
  private int llp = 0;
  private readonly BitArray b;
  public LUPrefix(int n) => b = new(n);

  public void Upload(int video) {
    if(b[video - 1])
      return;
    b[video - 1] = true;
    while(llp< b.Length && b[llp])
      llp++;
  }

  public int Longest() => llp;
}

/**
 * Your LUPrefix object will be instantiated and called as such:
 * LUPrefix obj = new LUPrefix(n);
 * obj.Upload(video);
 * int param_2 = obj.Longest();
 */
```
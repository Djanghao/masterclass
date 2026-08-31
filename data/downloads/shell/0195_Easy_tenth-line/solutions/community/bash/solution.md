# 💥Runtimebeats 99.83%, Memory beats 97.78%

**Author:** r9n
**Votes:** 14
**Link:** [https://leetcode.com/problems/tenth-line/solutions/5745387/](https://leetcode.com/problems/tenth-line/solutions/5745387/)

---

# Intuition
it seemed pretty straightforward: I just need to grab the 10th line from a file. But, as simple as it sounds, I wanted to make sure I\u2019m doing it in the most efficient way, especially if the file is large.

I imagined the file like a long list of lines. The 10th line is just sitting there, but if I\u2019m not careful, my script might read all the way through the file, even if I only care about the first 10 lines! That\u2019s a waste of time, especially if the file has thousands of lines. So, the trick is to stop reading as soon as I\u2019ve found what I need\u2014the 10th line\u2014and not bother with the rest of the file. This saves time and makes the script faster.

# Approach
Use sed to find the 10th line \u2013 sed is great for finding and manipulating specific lines in a file, but by default, it keeps reading through the whole file. So, I told sed to do two things:

First, when it reaches the 10th line, print it and stop reading the rest of the file (10q). This ensures I don\u2019t waste time processing any unnecessary lines.
Second, I included a command that discards any other lines (d), so I\u2019m only interested in the 10th one.

Quit after the 10th line \u2013 The key optimization here is that once sed finds the 10th line, it quits the program. This makes the solution much faster because it doesn\u2019t keep going after the 10th line, which is really important for large files.

# Complexity
- Time complexity:
O(n), where n is the number of lines I need to process to find the 10th line. But, because I quit as soon as I hit line 10, this is much more efficient than scanning through the entire file. Essentially, the time is proportional to how far into the file I need to go. If there are fewer than 10 lines, it stops early. If the file is huge, it still stops as soon as it hits the 10th line.

  Best case: If the file has fewer than 10 lines, the program stops quickly.
Worst case: It reads exactly 10 lines and then stops.

- Space complexity:
O(1) because sed operates in a streaming fashion. It doesn\u2019t load the entire file into memory; instead, it processes one line at a time. This means that no matter how big the file is, the memory usage stays constant, only storing a small amount of information about the current line being processed.

# Code
```bash []
sed '10q;d' file.txt
```
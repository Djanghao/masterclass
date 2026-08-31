# Easy C++/Python/Java/Rust Stack Solution with Explanation

**Author:** rpn2eax
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4981521/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4981521/)

---

# Approach
- Add character to stack if it's a opening bracket. But if it's a closing one, check if stack isn't empty or a pairing exists. If it exists, pop the stack, else mark position as star. 

- In the end, we have all non-paired opening brackets. Mark their position as star. 

- Deleting all the star positions and we are left with the final string.

# Complexity
- Time complexity: O(N)
- Space complexity: O(N)

# Code

```C++ []
class Solution {
 public:
  string minRemoveToMakeValid(string s) {
    stack<int> stack;  // unpaired '(' indices

    for (int i = 0; i < s.length(); ++i)
      if (s[i] == '(') {
        stack.push(i);  // Record the unpaired '(' index.
      } else if (s[i] == ')') {
        if (stack.empty())
          s[i] = '*';  // Mark the unpaired ')' as '*'.
        else
          stack.pop();  // Find a pair!
      }

    // Mark the unpaired '(' as '*'.
    while (!stack.empty())
      s[stack.top()] = '*', stack.pop();

    s.erase(remove(s.begin(), s.end(), '*'), s.end());
    return s;
  }
};
```
```Python []
class Solution:
  def minRemoveToMakeValid(self, s: str) -> str:
    stack = []  # unpaired '(' indices
    chars = [c for c in s]

    for i, c in enumerate(chars):
      if c == '(':
        stack.append(i)  # Record the unpaired '(' index.
      elif c == ')':
        if stack:
          stack.pop()  # Find a pair
        else:
          chars[i] = '*'  # Mark the unpaired ')' as '*'.

    # Mark the unpaired '(' as '*'.
    while stack:
      chars[stack.pop()] = '*'

    return ''.join(chars).replace('*', '')
```
```Java []
class Solution {
  public String minRemoveToMakeValid(String s) {
    Deque<Integer> stack = new ArrayDeque<>(); // unpaired '(' indices
    StringBuilder sb = new StringBuilder(s);

    for (int i = 0; i < s.length(); ++i)
      if (sb.charAt(i) == '(') {
        stack.push(i); // Record the unpaired '(' index.
      } else if (sb.charAt(i) == ')') {
        if (stack.isEmpty())
          sb.setCharAt(i, '#'); // Mark the unpaired ')' as '#'.
        else
          stack.pop(); // Find a pair!
      }

    // Mark the unpaired '(' as '#'.
    while (!stack.isEmpty())
      sb.setCharAt(stack.pop(), '#');

    return sb.toString().replaceAll("#", "");
  }
}
```
```Rust []
impl Solution {
    pub fn min_remove_to_make_valid(s: String) -> String {
        let mut stack = vec![];
        let mut s = s.chars().collect::<Vec<_>>();
        for (i, c) in s.iter_mut().enumerate(){
            match c{
                '(' => stack.push(i),
                ')' =>{
                    if stack.is_empty() { *c = '*'; }
                    else { stack.pop();}
                },
                _ => {}
            }
        }
        for idx in stack{
            s[idx] = '*';
        }
        s.iter()
            .filter(|&&p| p != '*')
            .map(|p| *p)
            .collect::<String>()
    }
}
```


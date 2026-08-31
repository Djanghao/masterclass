# Frequency Count ， Determine Excess, Sliding Window

**Author:** SuguruOsako
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/5212119/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/5212119/)

---

### Intuition

To solve the problem of converting a given string into a balanced string containing equal numbers of 'Q', 'W', 'E', and 'R', we can use a sliding window approach. This approach allows us to efficiently find the minimum length substring that can be replaced to achieve the desired balance.

### Approach

1. **Character Frequency Count**: First, we count the frequency of each character ('Q', 'W', 'E', 'R') in the given string. If the string is already balanced, we return 0.

2. **Determine Excess**: Calculate the excess count of each character by comparing with the required balanced frequency (n/4). If a character's count exceeds the balanced count, it contributes to the excess.

3. **Sliding Window**: Use a sliding window to traverse the string and dynamically adjust the counts of the characters within the window. The goal is to find the smallest window that can be replaced to balance the string.

4. **Adjust and Check**: Expand the window by moving the right pointer until the substring can potentially balance the excess characters. Then, shrink the window by moving the left pointer while maintaining the potential balance. Keep track of the minimum window size.

### Complexity
- **Time complexity**:

The time complexity is $$O(n)$$, where $$n$$ is the length of the string. This is because each character is processed at most twice (once by the right pointer and once by the left pointer).

- **Space complexity**:

The space complexity is $$O(1)$$, since we are using a fixed amount of extra space to store the frequency counts and other variables, regardless of the input size.

---

### \u76F4\u89C9

\u8981\u89E3\u51B3\u5C06\u7ED9\u5B9A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5305\u542B\u76F8\u7B49\u6570\u91CF\u7684 'Q', 'W', 'E', \u548C 'R' \u7684\u5E73\u8861\u5B57\u7B26\u4E32\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6ED1\u52A8\u7A97\u53E3\u65B9\u6CD5\u3002\u8FD9\u79CD\u65B9\u6CD5\u53EF\u4EE5\u6709\u6548\u5730\u627E\u5230\u53EF\u4EE5\u66FF\u6362\u4EE5\u8FBE\u5230\u6240\u9700\u5E73\u8861\u7684\u6700\u5C0F\u957F\u5EA6\u5B50\u4E32\u3002

### \u65B9\u6CD5

1. **\u5B57\u7B26\u9891\u7387\u8BA1\u6570**\uFF1A\u9996\u5148\uFF0C\u6211\u4EEC\u8BA1\u7B97\u7ED9\u5B9A\u5B57\u7B26\u4E32\u4E2D\u6BCF\u4E2A\u5B57\u7B26 ('Q', 'W', 'E', 'R') \u7684\u9891\u7387\u3002\u5982\u679C\u5B57\u7B26\u4E32\u5DF2\u7ECF\u5E73\u8861\uFF0C\u6211\u4EEC\u8FD4\u56DE 0\u3002

2. **\u786E\u5B9A\u8FC7\u91CF\u5B57\u7B26**\uFF1A\u901A\u8FC7\u4E0E\u6240\u9700\u7684\u5E73\u8861\u9891\u7387 (n/4) \u8FDB\u884C\u6BD4\u8F83\uFF0C\u8BA1\u7B97\u6BCF\u4E2A\u5B57\u7B26\u7684\u8FC7\u91CF\u6570\u91CF\u3002\u5982\u679C\u67D0\u4E2A\u5B57\u7B26\u7684\u6570\u91CF\u8D85\u8FC7\u4E86\u5E73\u8861\u6570\u91CF\uFF0C\u5B83\u5C31\u6784\u6210\u4E86\u8FC7\u91CF\u3002

3. **\u6ED1\u52A8\u7A97\u53E3**\uFF1A\u4F7F\u7528\u6ED1\u52A8\u7A97\u53E3\u904D\u5386\u5B57\u7B26\u4E32\uFF0C\u5E76\u52A8\u6001\u8C03\u6574\u7A97\u53E3\u5185\u5B57\u7B26\u7684\u8BA1\u6570\u3002\u76EE\u6807\u662F\u627E\u5230\u53EF\u4EE5\u66FF\u6362\u4EE5\u5E73\u8861\u5B57\u7B26\u4E32\u7684\u6700\u5C0F\u7A97\u53E3\u3002

4. **\u8C03\u6574\u548C\u68C0\u67E5**\uFF1A\u901A\u8FC7\u79FB\u52A8\u53F3\u6307\u9488\u6269\u5C55\u7A97\u53E3\uFF0C\u76F4\u5230\u5B50\u4E32\u53EF\u4EE5\u6F5C\u5728\u5730\u5E73\u8861\u8FC7\u91CF\u5B57\u7B26\u3002\u7136\u540E\uFF0C\u901A\u8FC7\u79FB\u52A8\u5DE6\u6307\u9488\u7F29\u5C0F\u7A97\u53E3\uFF0C\u540C\u65F6\u4FDD\u6301\u6F5C\u5728\u7684\u5E73\u8861\u3002\u8BB0\u5F55\u6700\u5C0F\u7A97\u53E3\u5927\u5C0F\u3002

### \u590D\u6742\u5EA6
- **\u65F6\u95F4\u590D\u6742\u5EA6**\uFF1A

\u65F6\u95F4\u590D\u6742\u5EA6\u662F $$O(n)$$\uFF0C\u5176\u4E2D $$n$$ \u662F\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u3002\u8FD9\u662F\u56E0\u4E3A\u6BCF\u4E2A\u5B57\u7B26\u6700\u591A\u5904\u7406\u4E24\u6B21\uFF08\u4E00\u6B21\u7531\u53F3\u6307\u9488\u5904\u7406\uFF0C\u4E00\u6B21\u7531\u5DE6\u6307\u9488\u5904\u7406\uFF09\u3002

- **\u7A7A\u95F4\u590D\u6742\u5EA6**\uFF1A

\u7A7A\u95F4\u590D\u6742\u5EA6\u662F $$O(1)$$\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4F7F\u7528\u7684\u662F\u56FA\u5B9A\u6570\u91CF\u7684\u989D\u5916\u7A7A\u95F4\u6765\u5B58\u50A8\u9891\u7387\u8BA1\u6570\u548C\u5176\u4ED6\u53D8\u91CF\uFF0C\u800C\u4E0D\u7BA1\u8F93\u5165\u5927\u5C0F\u3002


# Code
```java []
// \u66FF\u6362\u5B50\u4E32\u5F97\u5230\u5E73\u8861\u5B57\u7B26\u4E32
// \u6709\u4E00\u4E2A\u53EA\u542B\u6709 'Q', 'W', 'E', 'R' \u56DB\u79CD\u5B57\u7B26\uFF0C\u4E14\u957F\u5EA6\u4E3A n \u7684\u5B57\u7B26\u4E32\u3002
// \u5047\u5982\u5728\u8BE5\u5B57\u7B26\u4E32\u4E2D\uFF0C\u8FD9\u56DB\u4E2A\u5B57\u7B26\u90FD\u6070\u597D\u51FA\u73B0 n/4 \u6B21\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F\u4E00\u4E2A\u300C\u5E73\u8861\u5B57\u7B26\u4E32\u300D\u3002
// \u7ED9\u4F60\u4E00\u4E2A\u8FD9\u6837\u7684\u5B57\u7B26\u4E32 s\uFF0C\u8BF7\u901A\u8FC7\u300C\u66FF\u6362\u4E00\u4E2A\u5B50\u4E32\u300D\u7684\u65B9\u5F0F\uFF0C\u4F7F\u539F\u5B57\u7B26\u4E32 s \u53D8\u6210\u4E00\u4E2A\u300C\u5E73\u8861\u5B57\u7B26\u4E32\u300D\u3002
// \u4F60\u53EF\u4EE5\u7528\u548C\u300C\u5F85\u66FF\u6362\u5B50\u4E32\u300D\u957F\u5EA6\u76F8\u540C\u7684 \u4EFB\u4F55 \u5176\u4ED6\u5B57\u7B26\u4E32\u6765\u5B8C\u6210\u66FF\u6362\u3002
// \u8BF7\u8FD4\u56DE\u5F85\u66FF\u6362\u5B50\u4E32\u7684\u6700\u5C0F\u53EF\u80FD\u957F\u5EA6\u3002
// \u5982\u679C\u539F\u5B57\u7B26\u4E32\u81EA\u8EAB\u5C31\u662F\u4E00\u4E2A\u5E73\u8861\u5B57\u7B26\u4E32\uFF0C\u5219\u8FD4\u56DE 0\u3002
// \u6D4B\u8BD5\u94FE\u63A5 : https://leetcode.com/problems/replace-the-substring-for-balanced-string/
public class Solution {

	// Q W E R
	// 0 1 2 3
	// "W Q Q R R E"
	// 1 0 0 3 3 2
	// cnts[1] = 1;
	// cnts[0] = 2;
	// cnts[2] = 1;
	// cnts[3] = 2;
	public static int balancedString(String str) {
		int n = str.length();
		int[] arr = new int[n];
		int[] cnts = new int[4];
		for (int i = 0; i < n; i++) {
			char c = str.charAt(i);
			arr[i] = c == 'W' ? 1 : (c == 'E' ? 2 : (c == 'R' ? 3 : 0));
			cnts[arr[i]]++;
		}
		// str : \u957F\u5EA6\u662F4\u7684\u6574\u6570\u500D\uFF0Cn
		// \u6BCF\u79CD\u5B57\u7B26\u51FA\u73B0\u7684\u4E2A\u6570 : n/4
		int require = n / 4;
		// \u81F3\u5C11\u8981\u4FEE\u6539\u591A\u957F\u7684\u5B50\u4E32\uFF0C\u624D\u80FD\u505A\u5230\u56DB\u79CD\u5B57\u7B26\u4E00\u6837\u591A
		int ans = n;
		// \u81EA\u7531\u53D8\u5316\u7684\u7A97\u53E3l....r
		for (int l = 0, r = 0; l < n; l++) {
			// l = 0, r= 0, \u7A97\u53E30\u957F\u5EA6
			// l...r-1 : [l,r)
			while (!ok(cnts, r - l, require) && r < n) {
				// cnts : \u7A97\u53E3\u4E4B\u5916\u7684\u7EDF\u8BA1
				cnts[arr[r++]]--;
			}
			// 1) l...r-1 [l,r) \uFF0C\u505A\u5230\u4E86\uFF01
			// 2) r == n\uFF0C\u4E5F\u6CA1\u505A\u5230
			if (ok(cnts, r - l, require)) {
				ans = Math.min(ans, r - l);
			}
			// [l,r)\uFF0C\u4E0D\u88ABcnts\u7EDF\u8BA1\u5230\u7684
			//   l+1
			cnts[arr[l]]++;
		}
		return ans;
	}

	// cnts : l...r\u8303\u56F4\u4E0A\u7684\u5B57\u7B26\u4E0D\u7B97\uFF01\u5728\u81EA\u7531\u53D8\u5316\u7684\u7A97\u53E3\u4E4B\u5916\uFF0C\u6BCF\u4E00\u79CD\u5B57\u7B26\u7684\u8BCD\u9891\u7EDF\u8BA1
	// len : \u81EA\u7531\u53D8\u5316\u7A97\u53E3\u7684\u957F\u5EA6
	// require : \u6BCF\u4E00\u79CD\u5B57\u7B26\u90FD\u8981\u8FBE\u5230\u7684\u6570\u91CF
	// \u8FD4\u56DE\u503C : \u8BF7\u95EE\u80FD\u4E0D\u80FD\u505A\u5230
	public static boolean ok(int[] cnts, int len, int require) {
		for (int i = 0; i < 4; i++) {
			// 0 1 2 3
			if (cnts[i] > require) {
				return false;
			}
			// require - cnts[i] : 20 - 16 = 4
			len -= require - cnts[i];
		}
		return len == 0;
	}

}

```
```rust []
// \u66FF\u6362\u5B50\u4E32\u5F97\u5230\u5E73\u8861\u5B57\u7B26\u4E32
// \u6709\u4E00\u4E2A\u53EA\u542B\u6709 'Q', 'W', 'E', 'R' \u56DB\u79CD\u5B57\u7B26\uFF0C\u4E14\u957F\u5EA6\u4E3A n \u7684\u5B57\u7B26\u4E32\u3002
// \u5047\u5982\u5728\u8BE5\u5B57\u7B26\u4E32\u4E2D\uFF0C\u8FD9\u56DB\u4E2A\u5B57\u7B26\u90FD\u6070\u597D\u51FA\u73B0 n/4 \u6B21\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F\u4E00\u4E2A\u300C\u5E73\u8861\u5B57\u7B26\u4E32\u300D\u3002
// \u7ED9\u4F60\u4E00\u4E2A\u8FD9\u6837\u7684\u5B57\u7B26\u4E32 s\uFF0C\u8BF7\u901A\u8FC7\u300C\u66FF\u6362\u4E00\u4E2A\u5B50\u4E32\u300D\u7684\u65B9\u5F0F\uFF0C\u4F7F\u539F\u5B57\u7B26\u4E32 s \u53D8\u6210\u4E00\u4E2A\u300C\u5E73\u8861\u5B57\u7B26\u4E32\u300D\u3002
// \u4F60\u53EF\u4EE5\u7528\u548C\u300C\u5F85\u66FF\u6362\u5B50\u4E32\u300D\u957F\u5EA6\u76F8\u540C\u7684 \u4EFB\u4F55 \u5176\u4ED6\u5B57\u7B26\u4E32\u6765\u5B8C\u6210\u66FF\u6362\u3002
// \u8BF7\u8FD4\u56DE\u5F85\u66FF\u6362\u5B50\u4E32\u7684\u6700\u5C0F\u53EF\u80FD\u957F\u5EA6\u3002
// \u5982\u679C\u539F\u5B57\u7B26\u4E32\u81EA\u8EAB\u5C31\u662F\u4E00\u4E2A\u5E73\u8861\u5B57\u7B26\u4E32\uFF0C\u5219\u8FD4\u56DE 0\u3002
// \u6D4B\u8BD5\u94FE\u63A5 : https://leetcode.com/problems/replace-the-substring-for-balanced-string/
impl Solution {

    pub fn balanced_string(s: String) -> i32 {
        let n = s.len();
        let mut arr = vec![0; n];
        let mut cnts = vec![0; 4];
        for (i, c) in s.chars().enumerate() {
            arr[i] = match c {
                'W' => 1,
                'E' => 2,
                'R' => 3,
                _ => 0, // \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F 'Q'
            };
            cnts[arr[i]] += 1;
        }

        let require = n / 4;
        let mut ans = n as i32;

        let mut l = 0;
        let mut r = 0;
        while l < n {
            while !Self::ok(&cnts, r - l, require) && r < n {
                cnts[arr[r]] -= 1;
                r += 1;
            }
            if Self::ok(&cnts, r - l, require) {
                ans = ans.min((r - l) as i32);
            }
            cnts[arr[l]] += 1;
            l += 1;
        }

        ans
    }

    fn ok(cnts: &[i32], len: usize, require: usize) -> bool {
        let mut len = len as i32;
        for &cnt in cnts {
            if cnt > require as i32 {
                return false;
            }
            len -= require as i32 - cnt;
        }
        len == 0
    }
}
```
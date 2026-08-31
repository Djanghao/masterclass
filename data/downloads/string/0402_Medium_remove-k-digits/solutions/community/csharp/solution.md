# Full Explained Intuitive Solution || [Java/C++/Python3]

**Author:** Shivansu_7
**Votes:** 11
**Link:** [https://leetcode.com/problems/remove-k-digits/solutions/5008395/](https://leetcode.com/problems/remove-k-digits/solutions/5008395/)

---

# Intuition
##### ***To solve this problem, we use a stack. First, we push the first element of the number into the stack, making sure it's not a zero. Then, as we encounter the next elements, we compare them with the top element of the stack. If the new element is smaller, it has the potential to create a smaller number. So, we pop the top element from the stack and push the new element instead. But we need to be careful about how many elements we pop from the stack because we can only delete up to k digits.***
```
num = "1432219", k = 3
we first push 1 into the stack
           |         |
           |         |
           |         |   <-----Stack representation
           |   1     |
           |_________|

now we encounter 4 we check if 4 is lesser than 1 as it is not we push into the stack.

           |         |
           |         |
           |         |   <-----Stack representation
           |   4     |
           |___1_____|

then 3 comes as it is lesser than the top of the stack we pop 4 out and we push 3 in while simultaneously decrementing k . 

           |         |
           |         |
           |         |   <-----Stack representation  k=2
           |   3     |
           |___1_____|

2 beats 3 so 3 is popped out and 2 is pushed and k is decremented.

           |         |
           |         |
           |         |   <-----Stack representation  k=1
           |   2     |
           |___1_____|
2 doesnt beat 2 so it is pushed into the stack

           |         |
           |         |
           |   2     |   <-----Stack representation
           |   2     |
           |___1_____|
1 beats 2 so 2 is popped out and 1 is pushed in.

           |         |
           |         |
           |   1     |   <-----Stack representation   k=0
           |   2     |
           |___1_____|    
now we have the push whatever number is left as we have used up all our deletions

           |         |
           |   9     |
           |   1     |   <-----Stack representation
           |   2     |
           |___1_____|

           answer:-1219.

We will take another example to make sure our algorithm doesnt have leading 0s.

num = "10200", k = 1

           |         |
           |         |
           |         |   <-----Stack representation
           |   1     |
           |_________|
0 beats 1 but we should push 0 as this will cause leading zeros so we push the element if(ans.size()||c!='0') meaning
if ans.size()==0 and c=='0' it wouldnt push.

but we wedelete 1 as we have to fulfil the condition of the number of deleteions.

           |         |
           |         |
           |         |   <-----Stack representation   k=0
           |   2     |
           |_________|

           push  rest of the elements by making use of if(ans.size()||c!='0')push(element).



           |         |
           |   0     |
           |   0     |   <-----Stack representation   k=0
           |   2     |
           |_________|


           answer is 200
```

# Approach
1. **Boundary Case Check**: If the number of digits to be removed (`k`) is equal to the length of the number (`n`), then the entire number is removed, and the result would be "0".
   
2. **Using a Stack**:
   - We use a stack to keep track of the digits. We iterate through each digit of the number:
     - While the stack is not empty, `k` is greater than 0, and the top element of the stack is greater than the current digit, we pop elements from the stack and decrement `k`. This operation ensures that we remove larger digits that would contribute to a larger number.
     - After this operation, we push the current digit onto the stack.
   
3. **Removing Remaining Digits**: If there are still digits to be removed (`k` > 0) after the above step, we pop elements from the stack until `k` becomes 0.
   
4. **Constructing the Result**: We construct the result by popping digits from the stack and appending them to a StringBuilder. Since we need to output the smallest number, we reverse the StringBuilder to maintain the correct order of digits.
   
5. **Removing Trailing Zeroes**: We remove any leading zeroes from the result, except if the result is "0".

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public String removeKdigits(String num, int k) {
        int n = num.length();
        if(k==n) {
            return "0";
        }

        Stack<Character> st = new Stack<>();

        for(int i=0; i<n; i++) {
            char digit = num.charAt(i);
            while(!st.isEmpty() && k > 0 && st.peek() > digit) {
                st.pop();
                k--;
            }
            st.push(digit);
        }


        while(k > 0) {
            st.pop();
            k--;
        }

        StringBuilder sb = new StringBuilder();
        while(!st.isEmpty()) {
            sb.append(st.pop());
        }
        sb.reverse();
        while(sb.length() > 1 && sb.charAt(0)=='0') {
            sb.deleteCharAt(0);
        }
        return sb.toString();
    }
}
```
```C++ []
class Solution {
public:
    string removeKdigits(string num, int k) {
        int n = num.length();
        if (k == n) {
            return "0";
        }

        stack<char> st;

        for (int i = 0; i < n; i++) {
            char digit = num[i];
            while (!st.empty() && k > 0 && st.top() > digit) {
                st.pop();
                k--;
            }
            st.push(digit);
        }

        while (k > 0) {
            st.pop();
            k--;
        }

        string result = "";
        while (!st.empty()) {
            result = st.top() + result;
            st.pop();
        }

        // Removing leading zeroes
        while (result.length() > 1 && result[0] == '0') {
            result.erase(0, 1);
        }

        return result;
    }
};
```
```Python3 []
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        n = len(num)
        if k == n:
            return "0"

        st = []
        for digit in num:
            while st and k > 0 and st[-1] > digit:
                st.pop()
                k -= 1
            st.append(digit)

        while k > 0:
            st.pop()
            k -= 1

        result = ''.join(st).lstrip('0')

        return result if result else "0"
```
```Go []
func (s Solution) removeKdigits(num string, k int) string {
	n := len(num)
	if k == n {
		return "0"
	}

	var st []byte

	for i := 0; i < n; i++ {
		digit := num[i]
		for len(st) > 0 && k > 0 && st[len(st)-1] > digit {
			st = st[:len(st)-1]
			k--
		}
		st = append(st, digit)
	}

	for k > 0 {
		st = st[:len(st)-1]
		k--
	}

	result := strings.TrimLeft(string(st), "0")

	if result == "" {
		return "0"
	}
	return result
}
```
```C# []
public class Solution {
    public string RemoveKdigits(string num, int k) {
        int n = num.Length;
        if (k == n) {
            return "0";
        }

        Stack<char> st = new Stack<char>();

        for (int i = 0; i < n; i++) {
            char digit = num[i];
            while (st.Count > 0 && k > 0 && st.Peek() > digit) {
                st.Pop();
                k--;
            }
            st.Push(digit);
        }

        while (k > 0) {
            st.Pop();
            k--;
        }

        StringBuilder sb = new StringBuilder();
        while (st.Count > 0) {
            sb.Insert(0, st.Pop());
        }
        sb.Replace("0", "").ToString();

        return sb.Length == 0 ? "0" : sb.ToString();
    }
}
```
```JavaScript []
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const n = num.length;
    if (k === n) {
        return "0";
    }

    const stack = [];

    for (let i = 0; i < n; i++) {
        const digit = num.charAt(i);
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    let result = stack.join('').replace(/^0+/, '');

    return result === '' ? "0" : result;
};
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)


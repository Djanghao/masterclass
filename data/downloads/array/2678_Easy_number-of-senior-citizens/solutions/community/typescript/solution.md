# Simple solution || Available in 10 languages

**Author:** tachithanhdanh
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5565894/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5565894/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To determine the number of passengers who are strictly more than 60 years old, we need to extract and check the age information from each string in the array. Given that each string has a fixed format, the task becomes straightforward: parse the age from the appropriate substring and count how many of these parsed ages exceed 60.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate through the array of strings.
2. For each string, extract the substring that represents the age (characters at positions 11 and 12).
3. Convert the extracted substring to an integer.
4. Check if the integer value is greater than 60.
5. Maintain a count of how many such ages are found.
6. Return the final count after processing all the strings.
# Complexity
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Time complexity: The time complexity of this approach is $$O(n)$$, where nnn is the number of strings in the input array. Each string is processed in constant time.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- Space complexity: The space complexity is $$O(1)$$ because we are only using a fixed amount of additional space for variables, regardless of the input size.

# Code
```cpp []
class Solution {
public:
    int countSeniors(vector<string>& details) {
        return count_if(details.begin(), details.end(), [](const string& detail) {
            return stoi(detail.substr(11, 2)) > 60;
        });
    }
};
```
```java []
class Solution {
    public int countSeniors(String[] details) {
        return (int)Arrays
                .stream(details)
                .filter(
                    detail -> Integer.parseInt(detail.substring(11, 13)) > 60
                )
                .count();
    }
}
```
```python3 []
class Solution:
    def countSeniors(self, details: List[str]) -> int:
        return sum((s[11:13] > '60' for s in details))
```
```csharp []
public class Solution {
    public int CountSeniors(string[] details) {
        return details.Count(x => int.Parse(x.Substring(11, 2)) > 60);
    }
}
```
```kotlin []
class Solution {
    fun countSeniors(details: Array<String>): Int {
        return details.count { it.substring(11, 13).toInt() > 60 }
    }
}
```
```rust []
impl Solution {
    pub fn count_seniors(details: Vec<String>) -> i32 {
        details.iter()
            .filter(|s| s[11..13].parse::<i32>().unwrap() > 60)
            .count() as i32
    }
}
```
```javascript []
var countSeniors = function(details) {
    return details.filter((detail) => { return detail.substring(11, 13) > '60'}).length;
};
```
```typescript []
function countSeniors(details: string[]): number {
    return details.filter((detail) => detail.substring(11, 13) > '60').length;
};
```
```ruby []
def count_seniors(details)
  details.count do |detail|
    detail[11, 2].to_i > 60
  end
end
```
```scala []
object Solution {
  def countSeniors(details: Array[String]): Int = {
    details.count { detail =>
      val age = detail.substring(11, 13).toInt
      age > 60
    }
  }
}
```
```python []
class Solution(object):
    def countSeniors(self, details):
        return sum((s[11:13] > '60' for s in details))
```

# facil solution

**Author:** irwinekabakti
**Votes:** 5
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4485141/](https://leetcode.com/problems/assign-cookies/solutions/4485141/)

---

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function findContentChildren(g: number[], s: number[]): number {
  let count: number = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  
  for (const cookie of s) {
    if (cookie >= g[count]) count++;
  }

  return count;
};
```
```golang []
func findContentChildren(g []int, s []int) int {
	count := 0

    sort.Ints(g)
	sort.Ints(s)


	for _, cookie := range s {
		if count < len(g) && cookie >= g[count] {
			count++
		}
	}

	return count
}
```
```ruby []
def find_content_children(g, s)
  count = 0

  g.sort!
  s.sort!

  s.each do |cookie|
    if count < g.length && cookie >= g[count]
      count += 1
    end
  end

  count
end
```
```rust []
impl Solution {
    pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
        let mut count = 0;

        let mut g = g;
        let mut s = s;

        g.sort();
        s.sort();

        for &cookie in s.iter() {
            if count < g.len() && cookie >= g[count] {
                count += 1;
            }
        }

        count as i32
    }
}
```
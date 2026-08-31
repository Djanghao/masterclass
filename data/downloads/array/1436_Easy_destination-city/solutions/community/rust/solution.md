# facil solution

**Author:** irwinekabakti
**Votes:** 4
**Link:** [https://leetcode.com/problems/destination-city/solutions/4406217/](https://leetcode.com/problems/destination-city/solutions/4406217/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. we map path[0] as a key => path[1] as a value into hashMap
2. then we can easily seen the only city has no path to other city

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
if a city has connection to the other cities, it has to be show in path[0] and path[1] in some point

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```typescript []
function destCity(paths: string[][]): string {
  let hashMap = new Map<string, string>();

  for (let path of paths) {
    hashMap.set(path[0], path[1]);
  }

  for (let value of hashMap.values()) {
    if (!hashMap.has(value)) {
      return value;
    }
  }
};
```
```golang []
func destCity(paths [][]string) string {
    hashMap := make(map[string]string)

	for _, path := range paths {
		hashMap[path[0]] = path[1]
	}

	for _, city := range hashMap {
		if _, exists := hashMap[city]; !exists {
			return city
		}
	}

	return ""
}
```
```ruby []
def dest_city(paths)
  hash_map = {}

  paths.each do |path|
    hash_map[path[0]] = path[1]
  end

  hash_map.each_value do |city|
    return city unless hash_map.key?(city)
  end

  nil
end
```
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn dest_city(paths: Vec<Vec<String>>) -> String {
        let mut hash_map = HashMap::new();

        for path in paths.iter() {
            hash_map.insert(path[0].clone(), path[1].clone());
        }

        for city in hash_map.values() {
            if !hash_map.contains_key(city) {
                return city.clone();
            }
        }

        String::new()
    }
}
```


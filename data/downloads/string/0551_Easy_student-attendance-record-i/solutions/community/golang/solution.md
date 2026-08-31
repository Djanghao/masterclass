# golang one liner

**Author:** ylz-at
**Votes:** 3
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/567379/](https://leetcode.com/problems/student-attendance-record-i/solutions/567379/)

---

```
package main

import "strings"

func checkRecord(s string) bool {
	return strings.Count(s, "A") < 2 && strings.Index(s, "LLL") == -1
}
```
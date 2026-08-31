# Golang beats 100% at 6ms

**Author:** rtom09
**Votes:** 13
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/96574/](https://leetcode.com/problems/license-key-formatting/solutions/96574/)

---

```
import (
	"fmt"
	"strings"
)

func licenseKeyFormatting(S string, K int) string {
        S = strings.Replace(S, "-", "", -1)
        S = strings.ToUpper(S)
        mod := len(S) % K
        
        if mod == 0 {
            mod += K
        }
        for mod < len(S) {
            S = S[:mod] + "-" + S[mod:]
            mod += K + 1
        }
        return S
}

```
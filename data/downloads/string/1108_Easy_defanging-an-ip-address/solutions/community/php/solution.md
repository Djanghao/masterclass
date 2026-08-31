# [C/C++/Java/Python/C#/PHP/Ruby/JS/TS/Go/Rust/Swift] regex and replace

**Author:** i-i
**Votes:** 25
**Link:** [https://leetcode.com/problems/defanging-an-ip-address/solutions/442529/](https://leetcode.com/problems/defanging-an-ip-address/solutions/442529/)

---

### C using a for loop:

```
#include <stdio.h>
#include <stdlib.h>

static const char *defangIPaddr(
    const char *address
) {
    char *ipv4_memory = calloc(1, sizeof("###[.]###[.]###[.]###"));
    char *defanged = ipv4_memory;

    for (const char *character = address; *character; character++) {
        if (*character == '.') {
            *ipv4_memory++ = '[';
            *ipv4_memory++ = '.';
            *ipv4_memory++ = ']';

        } else {
            *ipv4_memory++ = *character;
        }
    }

    return defanged;
}

```


### C using `asprintf()` (from Code Review SE):

```
#include <stdio.h>

char *defangIPaddr(const char *address) {
    char *defanged;
    int ip[4];

    if (sscanf(address, "%d.%d.%d.%d", &ip[0], &ip[1], &ip[2], &ip[3]) != 4) {
        return NULL;
    }

    if (asprintf(&defanged, "%d[.]%d[.]%d[.]%d", ip[0], ip[1], ip[2], ip[3]) == -1) {
        return NULL;
    }

    return defanged;
}
```

### C using a for loop a bit simplified:

```
#include <stdio.h>
#include <stdlib.h>

static const char *defangIPaddr(
    const char *address
) {
    char *q = calloc(1, sizeof("###[.]###[.]###[.]###"));
    char *defanged = q;

    for (const char *p = address; *p; p++) {
        if (*p == '.') {
            *q++ = '[';
            *q++ = '.';
            *q++ = ']';

        } else {
            *q++ = *p;
        }
    }

    return defanged;
}
```


**C++**: with regex (using character class: `[]`):

```
class Solution {
public:
    string defangIPaddr(string a) {
        return regex_replace(a, regex("[.]"), "[.]");
    }
};
```

**C++**: with regex (without using character class: `[]` with just escaping `\\\\.`):

```
class Solution {
public:
    string defangIPaddr(string a) {
        return regex_replace(a, regex("\\\\."), "[.]");
    }
};
```

**Java**: using `replace()`:

```
class Solution {
    public String defangIPaddr(String a) {
        return a.replace(".", "[.]");
    }
}
```

**Java**: using `replaceAll()`:

```
class Solution {
    public String defangIPaddr(String a) {
        return a.replaceAll("\\\\.", "[.]");
    }
}
```

**Java**: similar to C++ using a character class `[]` with `replaceAll()`:

```
class Solution {
    public String defangIPaddr(String a) {
        return a.replaceAll("[.]", "[.]");
    }
}
```

**Python3 or Python:** with `re.sub()`:

```
class Solution:
    def defangIPaddr(self, a):
        return re.sub('\\.', '[.]', a)
```

**Python3 or Python:** with `replace()`:

```
class Solution:
    def defangIPaddr(self, a):
        return a.replace(".", "[.]")
```


**PHP**: using `str_replace()`:

```
class Solution
{
    public function defangIPaddr($a)
    {
        return str_replace('.', '[.]', $a);
    }
}
```


**PHP**: using `preg_replace()`:

```
class Solution
{
    public function defangIPaddr($a)
    {
        return preg_replace('/\\./', '[.]', $a);
    }
}
```

**PHP**: using `preg_replace()` and a character class `[]`:

```
class Solution
{
    public function defangIPaddr($a)
    {
        return preg_replace('/[.]/', '[.]', $a);
    }
}
```

**Ruby**: similar to PHP using `gsub()`:

```
def defang_i_paddr(a)
  a.gsub(/\\./, "[.]")
end
```


**JavaScript/TypeScript**: using the `g` global flag (modifier) with `replace()`:

```
const defangIPaddr = function(a) {
    return a.replace(/\\./g, "[.]")
}
```

```
function defangIPaddr(a: string): string {
    return a.replace(/\\./g, "[.]")
}
```

**C#**: using `Replace()`:

```
class Solution {
    public string DefangIPaddr(string a) {
        return a.Replace(".", "[.]");
    }
}
```


**Go**: using `strings.Replace()`:

```
func defangIPaddr(a string) string {
    return strings.Replace(a, ".", "[.]", -1)
}
```

**Rust**: using `replace()`:

```
impl Solution {
    pub fn defang_i_paddr(a: String) -> String {
       a.replace( ".", "[.]" )
    }
}
```

**Swift**: using `replacingOccurrences()`:


```
class Solution {
    func defangIPaddr(_ a: String) -> String {
        return a.replacingOccurrences(of: ".", with: "[.]")
    }
}
```


**Explanation**:

The `.` is a metachar in RegEx engines. We would either use a character class `[]` as a wrapper or we have to escape such metachars using one or two backslashes (depending on the language and functions).

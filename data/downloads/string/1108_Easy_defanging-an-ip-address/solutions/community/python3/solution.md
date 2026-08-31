# [Java/Python 3] 3 One liners + one w/o lib w/ analysis.

**Author:** rock
**Votes:** 206
**Link:** [https://leetcode.com/problems/defanging-an-ip-address/solutions/328895/](https://leetcode.com/problems/defanging-an-ip-address/solutions/328895/)

---

```java
    public String defangIPaddr(String address) {
        return address.replace(".", "[.]");
    }
    public String defangIPaddr(String address) {
        return String.join("[.]", address.split("\\\\."));
    }
    public String defangIPaddr(String address) {
        return address.replaceAll("\\\\.", "[.]");
    }
    public String defangIPaddr(String address) {
        StringBuilder sb = new StringBuilder();
        for (char c : address.toCharArray()) {
            sb.append(c == '.' ? "[.]" : c);
        }
        return sb.toString();
    }
```

```python
    def defangIPaddr(self, address: str) -> str:
        return address.replace('.', '[.]')
    def defangIPaddr(self, address: str) -> str:
        return '[.]'.join(address.split('.'))
    def defangIPaddr(self, address: str) -> str:
        return re.sub('\\.', '[.]', address)
    def defangIPaddr(self, address: str) -> str:
        return ''.join('[.]' if c == '.' else c for c in address)
```

**Analysis:**

All characters are visited at most twice, therefore, 

Time & space: `O(n)`, where `n = address.length()`.
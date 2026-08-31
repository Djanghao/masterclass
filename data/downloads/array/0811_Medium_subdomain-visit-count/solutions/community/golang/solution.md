# Go simple solution 8ms

**Author:** KonstantinK
**Votes:** 1
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/454767/](https://leetcode.com/problems/subdomain-visit-count/solutions/454767/)

---

```
func subdomainVisits(cpdomains []string) []string {

	ans := map[string]int{}
	ansStrings := []string{}

	for _, value := range cpdomains {
		valueBySpace := strings.Split(value, " ")
		visitsNumber, _ := strconv.Atoi(valueBySpace[0])
		allDomains := strings.Split(valueBySpace[1], ".")

		for i := 0; i < len(allDomains); i++ {
			currentDomain := strings.Join(allDomains[i:], ".")
			ans[currentDomain] += visitsNumber
		}
	}

	for value, counter := range ans {
		currentItem := strconv.Itoa(counter) + " " + value
		ansStrings = append(ansStrings, currentItem)
	}

	return ansStrings
}
```
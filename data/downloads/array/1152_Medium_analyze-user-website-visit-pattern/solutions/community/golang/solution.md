# Golang solution. Subsequence generation. Sorting. HashMaps

**Author:** nsLLC
**Votes:** 0
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5778508/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5778508/)

---

# Complexity
- Time complexity:
Sorting tuples $$O(nlogn)$$
Length 3 subsequence generation: $$O(n^3)$$

# Code
```golang []
package main

import (
	"fmt"
	"sort"
	"strings"
)

type Tuple struct {
	username  string
	timestamp int
	website   string
}

func mostVisitedPattern(username []string, timestamp []int, website []string) []string {
	n := len(username)

	// Step 1: Create a slice of Tuple(username, timestamp, website)
	tupleArr := []Tuple{}
	for i := 0; i < n; i++ {
		tupleArr = append(tupleArr, Tuple{username[i], timestamp[i], website[i]})
	}

	// Step 2: Sort tuples by timestamp
	sort.Slice(tupleArr, func(i, j int) bool {
		return tupleArr[i].timestamp < tupleArr[j].timestamp
	})

	// Step 3: Map to track websites visited by each user in chronological order
	websiteVisits := make(map[string][]string)
	for _, tuple := range tupleArr {
		websiteVisits[tuple.username] = append(websiteVisits[tuple.username], tuple.website)
	}

	// Step 4: Map to count occurrences of each 3-length pattern
	patternCount := make(map[[3]string]int)

	// Step 5: Generate unique patterns for each user and update the pattern count
	for _, websitesInOrder := range websiteVisits {
        fmt.Println(websitesInOrder)
		seenPatterns := make(map[[3]string]bool) // to avoid duplicate patterns for the same user
        // 3 length subsequence generation
        for i := 0; i < len(websitesInOrder)-2; i++ {
            for j := i+1; j < len(websitesInOrder)-1; j++ {
                for k := j+1; k < len(websitesInOrder); k++ {
                    pattern := [3]string{websitesInOrder[i], websitesInOrder[j], websitesInOrder[k]}
                    if seenPatterns[pattern] {
                        continue
                    }
                    seenPatterns[pattern] = true
                    patternCount[pattern]++
                }
            }
        }
	}

	// Step 6: Find the pattern with the maximum count
	var res [3]string
	maxCount := 0
	for pattern, count := range patternCount {
		if count > maxCount || (count == maxCount && isLexigraphicallyLess(pattern[:], res[:])) {
			maxCount = count
			res = pattern
		}
	}

	// Return the result as a slice of strings
	return res[:]
}

func isLexigraphicallyLess(pattern []string, res []string) bool {
    for i := 0; i < len(pattern); i++ {
        if pattern[i] < res[i] {
            return true
        }
        if pattern[i] > res[i] {
            return false
        }
    }
    return false
}
```
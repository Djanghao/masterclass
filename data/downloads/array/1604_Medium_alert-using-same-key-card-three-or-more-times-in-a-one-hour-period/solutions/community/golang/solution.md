# Go map based solution, simple iteration

**Author:** christopherwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/2930273/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/2930273/)

---

# Intuition
A simple solution using maps in Go

* convert time string input to minutes integer for easy comparison
* use a map as a set to dedupe outputs
* use a simple for-loop and compare pairs to sorted grouping of times

# Code
```
func alertNames(keyName []string, keyTime []string) []string {
    tracker := map[string][]int{}

    nameSet := map[string]struct{}{}

    for i, name := range keyName {
        timeParts := strings.Split(keyTime[i], ":")
        hour, _ := strconv.Atoi(timeParts[0])
        minute, _ := strconv.Atoi(timeParts[1])

        timeInt := 60*hour+minute

        tracker[name] = append(tracker[name], timeInt)
    }

    for name, times := range tracker {
        sort.Ints(times)

        for i := 2; i < len(times); i++ {
            diff := times[i] - times[i-2]
            if diff <= 60 {
                nameSet[name] = struct{}{}
            }
        }
    }

    names := []string{}
    for name := range nameSet {
        names = append(names, name)
    }
    sort.Strings(names)

    return names
}
```
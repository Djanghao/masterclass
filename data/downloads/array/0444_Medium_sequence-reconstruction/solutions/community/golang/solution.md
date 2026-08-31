# Golang Topological sort w/ comments

**Author:** ExpOA3
**Votes:** 1
**Link:** [https://leetcode.com/problems/sequence-reconstruction/solutions/443106/](https://leetcode.com/problems/sequence-reconstruction/solutions/443106/)

---

The hardest part is to construct graph correctly. There're lots of edge cases and details.
I assume there must be a clearer way to do so. 
I left fmt.Print as comments so you can print out results of every step to help understand.

```
type void struct{}
var holder void

func sequenceReconstruction(org []int, seqs [][]int) bool {
    inDegreeCount := map[int]int{}
    graph := make(map[int]map[int]void) // map[int]void can be used as set
    
    // init inDegreeCount 
    for _, orgNum := range org {
        inDegreeCount[orgNum] = 0
    }
    // fmt.Println(inDegreeCount)
    
    // build inDegreeCount and graph (lots of details here. Should be a clearer way to do)
    for _, seq := range seqs {      
        for i, org := range seq {
            // seq includes an invalid org
            if _, ok := inDegreeCount[org]; !ok {
                return false
            }
            if i == len(seq)-1 {
                if _, ok := graph[org]; !ok {
                    graph[org] = make(map[int]void) // assign it a nil map
                }
            } else {
                if nextOrgs, ok := graph[org]; ok{
                    if _, ok := nextOrgs[seq[i+1]]; !ok {
                        nextOrgs[seq[i+1]] = holder
                        if !incrementInDegreeCount(seq[i+1], inDegreeCount) {
                            return false
                        }
                    }
                } else {
                    graph[org] = make(map[int]void)
                    graph[org][seq[i+1]] = holder
                    if !incrementInDegreeCount(seq[i+1], inDegreeCount) {
                            return false
                    }
                }
            }
        }
    }
    
    if len(inDegreeCount) != len(graph) {
        return false
    }
    
    // fmt.Println(inDegreeCount)
    // fmt.Println(graph)
    
    // find zero in-degree orgs
    zeroInDegreeOrg := 0
    for org, count := range inDegreeCount {
        if count == 0 {
            // more than 1 path
            if zeroInDegreeOrg != 0 {
                return false
            }
            zeroInDegreeOrg = org
        }
    }
    // fmt.Printf("start org: %d\
", zeroInDegreeOrg)
    
    // topological sort
    for zeroInDegreeOrg > 0 {
        zeroInDegreeOrg = topologicalSort(zeroInDegreeOrg, inDegreeCount, graph)
    }
    
    // fmt.Printf("zeroInDegreeOrg after topological sort: %d\
", zeroInDegreeOrg)
    // more than 1 path
    if zeroInDegreeOrg < 0 {
        return false
    }
    
    // fmt.Println(inDegreeCount)
    for _, count := range inDegreeCount {
        // loop
        if count > 0 {
            return false
        }
    }
    
    return true
    
}

func topologicalSort(startOrg int, inDegreeCount map[int]int, graph map[int]map[int]void) int {
    nextStartOrg := 0
    nextOrgs := graph[startOrg]
    for nextOrg, _ := range nextOrgs {
        inDegreeCount[nextOrg]--
        if inDegreeCount[nextOrg] == 0 {
            if nextStartOrg != 0 {
                return -1 // means false in main solution
            }
            nextStartOrg = nextOrg
        }
    }
    // fmt.Printf("next start org: %d\
", nextStartOrg)
    return nextStartOrg
}

// incrementInDegreeCount increment the in-degree count of key, if the key exists; if it doesn't, return false
func incrementInDegreeCount(key int, inDegreeCount map[int]int) bool{
    if _,ok := inDegreeCount[key]; !ok {
        // seq includes an invalid org
        return false
    } else {
        inDegreeCount[key]++
        return true
    }
}
```
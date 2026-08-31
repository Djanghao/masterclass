# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/5817562/](https://leetcode.com/problems/smallest-common-region/solutions/5817562/)

---

```Java []
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Solution {

    private Map<String, String> directedGraphRegionToParentRegion;

    public String findSmallestRegion(List<List<String>> regions, String firstRegion, String secondRegion) {
        directedGraphRegionToParentRegion = createDirectedGraphRegionToParentRegion(regions);
        return findFirstCommonParentOfTwoRegions(firstRegion, secondRegion);
    }

    private String findFirstCommonParentOfTwoRegions(String firstRegion, String secondRegion) {
        String stepFromFirstRegion = firstRegion;
        String stepFromSecondRegion = secondRegion;

        Set<String> visitedFromFirstRegion = new HashSet<>();
        Set<String> visitedFromSecondRegion = new HashSet<>();
        visitedFromFirstRegion.add(firstRegion);
        visitedFromSecondRegion.add(secondRegion);

        String firstCommonParentOfTwoRegions = "";

        while (true) {
            if (visitedFromFirstRegion.contains(stepFromSecondRegion)) {
                firstCommonParentOfTwoRegions = stepFromSecondRegion;
                break;
            }
            if (visitedFromSecondRegion.contains(stepFromFirstRegion)) {
                firstCommonParentOfTwoRegions = stepFromFirstRegion;
                break;
            }

            if (directedGraphRegionToParentRegion.containsKey(stepFromFirstRegion)) {
                stepFromFirstRegion = directedGraphRegionToParentRegion.get(stepFromFirstRegion);
                visitedFromFirstRegion.add(stepFromFirstRegion);
            }
            if (directedGraphRegionToParentRegion.containsKey(stepFromSecondRegion)) {
                stepFromSecondRegion = directedGraphRegionToParentRegion.get(stepFromSecondRegion);
                visitedFromSecondRegion.add(stepFromSecondRegion);
            }
        }

        return firstCommonParentOfTwoRegions;
    }

    private Map<String, String> createDirectedGraphRegionToParentRegion(List<List<String>> regions) {
        Map<String, String> regionToParentRegion = new HashMap<>();
        for (List<String> groupOfRegions : regions) {
            String parentRegion = groupOfRegions.get(0);
            for (int i = 1; i < groupOfRegions.size(); ++i) {
                regionToParentRegion.put(groupOfRegions.get(i), parentRegion);
            }
        }
        return regionToParentRegion;
    }
}
```
```JavaScript []
/**
 * @param {string[][]} regions
 * @param {string} firstRegion
 * @param {string} secondRegion
 * @return {string}
 */
var findSmallestRegion = function (regions, firstRegion, secondRegion) {
    this.directedGraphRegionToParentRegion = createDirectedGraphRegionToParentRegion(regions);
    return findFirstCommonParentOfTwoRegions(firstRegion, secondRegion);
};

/**
 * @param {string} firstRegion
 * @param {string} secondRegion
 * @return {string}
 */
function findFirstCommonParentOfTwoRegions(firstRegion, secondRegion) {
    let stepFromFirstRegion = firstRegion;
    let stepFromSecondRegion = secondRegion;

    const visitedFromFirstRegion = new Set();
    const visitedFromSecondRegion = new Set();
    visitedFromFirstRegion.add(firstRegion);
    visitedFromSecondRegion.add(secondRegion);

    let firstCommonParentOfTwoRegions = "";

    while (true) {
        if (visitedFromFirstRegion.has(stepFromSecondRegion)) {
            firstCommonParentOfTwoRegions = stepFromSecondRegion;
            break;
        }
        if (visitedFromSecondRegion.has(stepFromFirstRegion)) {
            firstCommonParentOfTwoRegions = stepFromFirstRegion;
            break;
        }

        if (this.directedGraphRegionToParentRegion.has(stepFromFirstRegion)) {
            stepFromFirstRegion = this.directedGraphRegionToParentRegion.get(stepFromFirstRegion);
            visitedFromFirstRegion.add(stepFromFirstRegion);
        }
        if (this.directedGraphRegionToParentRegion.has(stepFromSecondRegion)) {
            stepFromSecondRegion = this.directedGraphRegionToParentRegion.get(stepFromSecondRegion);
            visitedFromSecondRegion.add(stepFromSecondRegion);
        }
    }

    return firstCommonParentOfTwoRegions;
}

/**
 * @param {string[][]} regions
 * @return {Map<string, string>}
 */
function createDirectedGraphRegionToParentRegion(regions) {
    const regionToParentRegion = new Map();
    for (let groupOfRegions of regions) {
        const parentRegion = groupOfRegions[0];
        for (let i = 1; i < groupOfRegions.length; ++i) {
            regionToParentRegion.set(groupOfRegions[i], parentRegion);
        }
    }
    return regionToParentRegion;
}
```
```TypeScript []
function findSmallestRegion(regions: string[][], firstRegion: string, secondRegion: string): string {
    this.directedGraphRegionToParentRegion = createDirectedGraphRegionToParentRegion(regions);
    return findFirstCommonParentOfTwoRegions(firstRegion, secondRegion);
};

function findFirstCommonParentOfTwoRegions(firstRegion: string, secondRegion: string): string {
    let stepFromFirstRegion = firstRegion;
    let stepFromSecondRegion = secondRegion;

    const visitedFromFirstRegion = new Set<String>();
    const visitedFromSecondRegion = new Set<String>();
    visitedFromFirstRegion.add(firstRegion);
    visitedFromSecondRegion.add(secondRegion);

    let firstCommonParentOfTwoRegions = "";

    while (true) {
        if (visitedFromFirstRegion.has(stepFromSecondRegion)) {
            firstCommonParentOfTwoRegions = stepFromSecondRegion;
            break;
        }
        if (visitedFromSecondRegion.has(stepFromFirstRegion)) {
            firstCommonParentOfTwoRegions = stepFromFirstRegion;
            break;
        }

        if (this.directedGraphRegionToParentRegion.has(stepFromFirstRegion)) {
            stepFromFirstRegion = this.directedGraphRegionToParentRegion.get(stepFromFirstRegion);
            visitedFromFirstRegion.add(stepFromFirstRegion);
        }
        if (this.directedGraphRegionToParentRegion.has(stepFromSecondRegion)) {
            stepFromSecondRegion = this.directedGraphRegionToParentRegion.get(stepFromSecondRegion);
            visitedFromSecondRegion.add(stepFromSecondRegion);
        }
    }

    return firstCommonParentOfTwoRegions;
}

function createDirectedGraphRegionToParentRegion(regions: string[][]): Map<string, string> {
    const regionToParentRegion = new Map<string, string>();
    for (let groupOfRegions of regions) {
        const parentRegion = groupOfRegions[0];
        for (let i = 1; i < groupOfRegions.length; ++i) {
            regionToParentRegion.set(groupOfRegions[i], parentRegion);
        }
    }
    return regionToParentRegion;
}
```
```C++ []
#include <span>
#include <vector>
#include <string>
#include <unordered_set>
#include <unordered_map>
using namespace std;

/*
 The code will run faster with ios::sync_with_stdio(0).
 However, this should not be used in production code and interactive problems.
 In this particular problem, it is ok to apply ios::sync_with_stdio(0).

 Many of the top-ranked C++ solutions for time on leetcode apply this trick,
 so, for a fairer assessment of the time percentile of my code
 you could outcomment the lambda expression below for a faster run.
*/

/*
 const static auto speedup = [] {
	ios::sync_with_stdio(0);
	return nullptr;
 }();
*/

class Solution {

    unordered_map<string, string> directedGraphRegionToParentRegion;

public:
    string findSmallestRegion(const vector<vector<string>>& regions, const string& firstRegion, const string& secondRegion) {
        directedGraphRegionToParentRegion = createDirectedGraphRegionToParentRegion(regions);
        return findFirstCommonParentOfTwoRegions(firstRegion, secondRegion);
    }

private:
    string findFirstCommonParentOfTwoRegions(const string& firstRegion, const string& secondRegion) {
        string stepFromFirstRegion = firstRegion;
        string stepFromSecondRegion = secondRegion;

        unordered_set<string> visitedFromFirstRegion;
        unordered_set<string> visitedFromSecondRegion;
        visitedFromFirstRegion.insert(firstRegion);
        visitedFromSecondRegion.insert(secondRegion);

        string firstCommonParentOfTwoRegions;

        while (true) {
            if (visitedFromFirstRegion.contains(stepFromSecondRegion)) {
                firstCommonParentOfTwoRegions = stepFromSecondRegion;
                break;
            }
            if (visitedFromSecondRegion.contains(stepFromFirstRegion)) {
                firstCommonParentOfTwoRegions = stepFromFirstRegion;
                break;
            }

            if (directedGraphRegionToParentRegion.contains(stepFromFirstRegion)) {
                stepFromFirstRegion = directedGraphRegionToParentRegion[stepFromFirstRegion];
                visitedFromFirstRegion.insert(stepFromFirstRegion);
            }
            if (directedGraphRegionToParentRegion.contains(stepFromSecondRegion)) {
                stepFromSecondRegion = directedGraphRegionToParentRegion[stepFromSecondRegion];
                visitedFromSecondRegion.insert(stepFromSecondRegion);
            }
        }

        return firstCommonParentOfTwoRegions;
    }

    unordered_map<string, string> createDirectedGraphRegionToParentRegion(span <const vector<string>> regions) const {
        unordered_map<string, string> regionToParentRegion;
        for (const auto& groupOfRegions : regions) {
            string parentRegion = groupOfRegions[0];
            for (size_t i = 1; i < groupOfRegions.size(); ++i) {
                regionToParentRegion[groupOfRegions[i]] = parentRegion;
            }
        }
        return regionToParentRegion;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private Dictionary<string, string> directedGraphRegionToParentRegion;

    public string FindSmallestRegion(IList<IList<string>> regions, string firstRegion, string secondRegion)
    {
        directedGraphRegionToParentRegion = CreateDirectedGraphRegionToParentRegion(regions);
        return FindFirstCommonParentOfTwoRegions(firstRegion, secondRegion);
    }

    private string FindFirstCommonParentOfTwoRegions(string firstRegion, string secondRegion)
    {
        string stepFromFirstRegion = firstRegion;
        string stepFromSecondRegion = secondRegion;

        HashSet<string> visitedFromFirstRegion = new HashSet<string>();
        HashSet<string> visitedFromSecondRegion = new HashSet<string>();
        visitedFromFirstRegion.Add(firstRegion);
        visitedFromSecondRegion.Add(secondRegion);

        string firstCommonParentOfTwoRegions = "";

        while (true)
        {
            if (visitedFromFirstRegion.Contains(stepFromSecondRegion))
            {
                firstCommonParentOfTwoRegions = stepFromSecondRegion;
                break;
            }
            if (visitedFromSecondRegion.Contains(stepFromFirstRegion))
            {
                firstCommonParentOfTwoRegions = stepFromFirstRegion;
                break;
            }

            if (directedGraphRegionToParentRegion.ContainsKey(stepFromFirstRegion))
            {
                stepFromFirstRegion = directedGraphRegionToParentRegion[stepFromFirstRegion];
                visitedFromFirstRegion.Add(stepFromFirstRegion);
            }
            if (directedGraphRegionToParentRegion.ContainsKey(stepFromSecondRegion))
            {
                stepFromSecondRegion = directedGraphRegionToParentRegion[stepFromSecondRegion];
                visitedFromSecondRegion.Add(stepFromSecondRegion);
            }
        }

        return firstCommonParentOfTwoRegions;
    }

    private Dictionary<string, string> CreateDirectedGraphRegionToParentRegion(IList<IList<String>> regions)
    {
        Dictionary<string, string> regionToParentRegion = new Dictionary<string, string>();
        foreach (IList<string> groupOfRegions in regions)
        {
            string parentRegion = groupOfRegions[0];
            for (int i = 1; i < groupOfRegions.Count; ++i)
            {
                regionToParentRegion.Add(groupOfRegions[i], parentRegion);
            }
        }
        return regionToParentRegion;
    }
}
```
```Kotlin []
import kotlin.collections.HashMap
import kotlin.collections.HashSet

class Solution {

    private lateinit var directedGraphRegionToParentRegion: HashMap<String, String>

    fun findSmallestRegion(regions: List<List<String>>, firstRegion: String, secondRegion: String): String {
        directedGraphRegionToParentRegion = createDirectedGraphRegionToParentRegion(regions)
        return findFirstCommonParentOfTwoRegions(firstRegion, secondRegion)
    }

    private fun findFirstCommonParentOfTwoRegions(firstRegion: String, secondRegion: String): String {
        var stepFromFirstRegion = firstRegion
        var stepFromSecondRegion = secondRegion

        val visitedFromFirstRegion = HashSet<String>()
        val visitedFromSecondRegion = HashSet<String>()
        visitedFromFirstRegion.add(firstRegion)
        visitedFromSecondRegion.add(secondRegion)

        val firstCommonParentOfTwoRegions: String

        while (true) {
            if (visitedFromFirstRegion.contains(stepFromSecondRegion)) {
                firstCommonParentOfTwoRegions = stepFromSecondRegion
                break
            }
            if (visitedFromSecondRegion.contains(stepFromFirstRegion)) {
                firstCommonParentOfTwoRegions = stepFromFirstRegion
                break
            }

            if (directedGraphRegionToParentRegion.containsKey(stepFromFirstRegion)) {
                stepFromFirstRegion = directedGraphRegionToParentRegion[stepFromFirstRegion]!!
                visitedFromFirstRegion.add(stepFromFirstRegion)
            }
            if (directedGraphRegionToParentRegion.containsKey(stepFromSecondRegion)) {
                stepFromSecondRegion = directedGraphRegionToParentRegion[stepFromSecondRegion]!!
                visitedFromSecondRegion.add(stepFromSecondRegion)
            }
        }

        return firstCommonParentOfTwoRegions
    }

    private fun createDirectedGraphRegionToParentRegion(regions: List<List<String>>): HashMap<String, String> {
        val regionToParentRegion = HashMap<String, String>()
        for (groupOfRegions in regions) {
            val parentRegion = groupOfRegions[0]
            for (i in 1..<groupOfRegions.size) {
                regionToParentRegion[groupOfRegions[i]] = parentRegion
            }
        }
        return regionToParentRegion
    }
}
```
```Go []
package main

import "fmt"

type HashSet struct {
    container map[string]bool
}

var directedGraphRegionToParentRegion = map[string]string{}

func findSmallestRegion(regions [][]string, firstRegion string, secondRegion string) string {
    directedGraphRegionToParentRegion = createDirectedGraphRegionToParentRegion(regions)
    return findFirstCommonParentOfTwoRegions(firstRegion, secondRegion)
}

func findFirstCommonParentOfTwoRegions(firstRegion string, secondRegion string) string {
    stepFromFirstRegion := firstRegion
    stepFromSecondRegion := secondRegion

    visitedFromFirstRegion := HashSet{container: map[string]bool{}}
    visitedFromSecondRegion := HashSet{container: map[string]bool{}}
    visitedFromFirstRegion.container[firstRegion] = true
    visitedFromSecondRegion.container[secondRegion] = true

    firstCommonParentOfTwoRegions := ""

    for true {
        if visitedFromFirstRegion.container[stepFromSecondRegion] {
            firstCommonParentOfTwoRegions = stepFromSecondRegion
            break
        }
        if visitedFromSecondRegion.container[stepFromFirstRegion] {
            firstCommonParentOfTwoRegions = stepFromFirstRegion
            break
        }

        if _, contains := directedGraphRegionToParentRegion[stepFromFirstRegion]; contains {
            stepFromFirstRegion = directedGraphRegionToParentRegion[stepFromFirstRegion]
            visitedFromFirstRegion.container[stepFromFirstRegion] = true
        }
        if _, contains := directedGraphRegionToParentRegion[stepFromSecondRegion]; contains {
            stepFromSecondRegion = directedGraphRegionToParentRegion[stepFromSecondRegion]
            visitedFromSecondRegion.container[stepFromSecondRegion] = true
        }
    }

    return firstCommonParentOfTwoRegions
}

func createDirectedGraphRegionToParentRegion(regions [][]string) map[string]string {
    regionToParentRegion := map[string]string{}
    for _, groupOfRegions := range regions {
        parentRegion := groupOfRegions[0]
        for i := 1; i < len(groupOfRegions); i++ {
            regionToParentRegion[groupOfRegions[i]] = parentRegion
        }
    }
    return regionToParentRegion
}
```
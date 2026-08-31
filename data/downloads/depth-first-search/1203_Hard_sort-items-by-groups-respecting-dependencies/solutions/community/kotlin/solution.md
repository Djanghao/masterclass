# Kotlin solution with comments

**Author:** ramanchik
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3971095/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/3971095/)

---

# Code
```
import java.util.LinkedList

class Solution {

    val NOT_VISITED = 0.toByte()
    val IN_PROCESS = 1.toByte()
    val VISITED = 2.toByte()

    val sortedGroups = mutableListOf<Group>()
    val itemsStatesCache = ByteArray(30001) { 0 }

    class Group(
        val sortedValues: MutableList<Int> = LinkedList(),
        val srcValues: HashMap<Int, MutableSet<Int>> = HashMap(),
        val dependencies: HashSet<Group> = HashSet(),
        var state: Byte = 0
    )

    // sorting into group
    fun sortGroup(group: Group): Boolean {
        group.srcValues.keys.forEach {
            if(sortStepTrueIfCycle(group, it)) return true
        }
        return false
    }
    
    // sorting step into group
    // return true if cycle was found
    fun sortStepTrueIfCycle(group: Group, item: Int): Boolean {
        if(itemsStatesCache[item] == VISITED) return false
        if(itemsStatesCache[item] == IN_PROCESS) return true

        itemsStatesCache[item] = IN_PROCESS
        for(i in group.srcValues[item]!!){
            if(sortStepTrueIfCycle(group, i)) return true
        }
        itemsStatesCache[item] = VISITED

        group.sortedValues.add(item)
        return false
    }
    
    // return true if cycle was found
    fun sortGroupsStep(group: Group): Boolean {
        if(group.state == VISITED) return false
        if(group.state == IN_PROCESS) return true

        group.state = IN_PROCESS
        group.dependencies.forEach {
            if(sortGroupsStep(it)) return true
        }
        group.state = VISITED
        sortedGroups.add(group)
        return false
    }

    fun sortItems(n: Int, m: Int, group: IntArray, beforeItems: List<List<Int>>): IntArray {
        // build item distributed by groups
        val groupsCache = Array<Group?>(n) { null }
        val numOfGroups = m + group.count { it == -1 }
        val groupsArray = Array(numOfGroups) { Group() }
        var singlesCounter = m
        group.forEachIndexed { i, value ->
            val g = if(value < 0) groupsArray[singlesCounter++] else groupsArray[value]
            g.srcValues[i] = HashSet(beforeItems[i])
            groupsCache[i] = g
        }

        // build group relation dependencies
        groupsArray.forEach { g ->
            g.srcValues.forEach { (item, groupDependencies) ->
                val depIterator = groupDependencies.iterator()
                while(depIterator.hasNext()) {
                    val dep = depIterator.next()
                    val isInternalLink = dep in g.srcValues.keys
                    if(!isInternalLink) {
                        g.dependencies.add(groupsCache[dep]!!)
                        depIterator.remove()
                    }
                }
            }
        }
        
        // sort groups. return empty if cycle was found
        groupsArray.forEach {
            if(sortGroupsStep(it)) return intArrayOf()
        }

        // sort items in every group and add it to result. return empty if cycle was found
        var resultIndex = 0
        val result = IntArray(n)
        sortedGroups.forEach { g ->
            if(sortGroup(g)) return intArrayOf()
            g.sortedValues.forEach {
                result[resultIndex++] = it
            }
        }

        return result
    }
}
```
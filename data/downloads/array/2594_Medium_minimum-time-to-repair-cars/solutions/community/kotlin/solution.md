# Rank Groups - Assign a car to the rank group with minimal cost

**Author:** lewisHamilton
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3318425/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3318425/)

---

# Intuition
Have a ```rank group``` with mechanics in the same group and assign each car to the minimal cost in the rank group.

# Complexity
- Time complexity: O(score * unique ranks) - Bit costly :(

- Space complexity: O(n)

# Code
```
class Solution {
    class RankGroup(val rank: Int, var count: Int = 0) {
        private val assignment = mutableListOf<Int>()
        private var lastAssignment = -1
        private var time = 0L
        
        fun initalizeGroupAssignments() {
            repeat(count) {
                assignment.add(0)
            }
            lastAssignment = -1
            time = 0L
        }
        
        private fun getNextAssignmentIndex(): Int {
            if(lastAssignment + 1 >= count) {
                return 0
            }
            return lastAssignment + 1
        }
        
        fun getDurationIfAssigned(): Long {
            var carsAlready = assignment[getNextAssignmentIndex()]
            return rank.toLong() * (carsAlready+1).toLong() * (carsAlready+1).toLong()
        }
        
        fun assignCar() {
            val carsAlready = assignment[getNextAssignmentIndex()]
            assignment[getNextAssignmentIndex()]++
            lastAssignment = getNextAssignmentIndex()
        }

        fun getTime(): Long {
            time = 0L
            for(assign in assignment) {
                val current = rank.toLong() * assign.toLong() * assign.toLong()
                if(current > time) {
                    time = current
                }
            }
            return time
        }

        override fun toString(): String {
            return "[rank = $rank, count = $count, [[assignments=${assignment.joinToString(", ")}]] time = $time ls = $lastAssignment]"
        }
    }
    
    fun repairCars(ranks: IntArray, cars: Int): Long {
        ranks.sort()
        val rankGroups = mutableListOf<RankGroup>()
        for(rank in ranks) {
            if(rankGroups.isEmpty()) {
                rankGroups.add(RankGroup(rank, 1))
            } else {
                if(rank == rankGroups.last()!!.rank) {
                    rankGroups.last().count++
                } else {
                    rankGroups.add(RankGroup(rank, 1))
                }
            }
        }
        rankGroups.forEach {
            it.initalizeGroupAssignments()
        }
        var rem = 0
        while(rem < cars) {
            var assigned = false
            var minCost = Long.MAX_VALUE
            var minCostIndex= -1
            for(i in 0 until rankGroups.size) {
                val cost = rankGroups[i].getDurationIfAssigned()
                if(cost < minCost) {
                    minCost = cost
                    minCostIndex = i
                }
            }
            if(minCostIndex != -1) {
                rankGroups[minCostIndex].assignCar()
                assigned = true
            }
            if(!assigned) {
                throw RuntimeException("car is not assigned in a rank group iteration")
            }
            rem++
        }
        return rankGroups.map { it.getTime() }.max() ?: 0L
    }
}
```
# Readable solution explaining an idea with Kotlin

**Author:** Moiiwa
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/4514198/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/4514198/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
So we have the following idea here: 
    1) Find friends of exact level by eliminating lower levels
    2) Find videos watched by this friends
    3) Make a map of video to its number of occurences
    4) Convert map to list of pairs
5) Sort by names
6)Sort by occurences
7)Map pairs to first elements of the pairs which are the names of the videos

# Approach
<!-- Describe your approach to solving the problem. -->
#### Step 1
To do the first step we can go with BFS with recursion, final step is level one or level 0 as a corner case. On all the other layers we have to add an exclusions for friends from this layer and proceed with each of them to find their friends.
#### Step 2
We can get videos by index when friends are found
#### Step 3
Add each video to the map by key if it is absent or increment its value it is present.
#### Step 4-7
map.toList().sortedBy{it.first}.sortedBy{it.value}.map {it.first}

# Code
```
class Solution {
    fun watchedVideosByFriends(watchedVideos: List<List<String>>, friends: Array<IntArray>, id: Int, level: Int): List<String> {
        var friendsOfLevel = friendsOfLevel(friends, level, id, mutableSetOf(id))
        var map = mutableMapOf<String, Int>()
        friendsOfLevel.forEach {
            watchedVideos[it].forEach {
                video ->
                map[video]?.let {
                    map[video] = map[video]!! + 1
                } ?: run {map[video] = 1}
            }
        }
        var res = mutableListOf<String>()
        return map.toList().sortedBy{it.first}.sortedBy{it.second}.map{it.first}
    }

    fun friendsOfLevel(friends: Array<IntArray>, level: Int, id: Int, toExclude: MutableSet<Int>) : Set<Int>{
        var friendSet = friends[id].filter {!toExclude.contains(it)}.toSet()
        if (level == 1) {
            return friendSet
        }
        if (level == 0) {
            return setOf<Int>()
        }
        var finalFriends = mutableSetOf<Int>()
        friendSet.forEach {
            toExclude.add(it)
            toExclude.add(id)
        }
        friendSet.forEach {
            friendsOfLevel(friends, level-1, it, toExclude).forEach {
                friend -> finalFriends.add(friend)
            }
        }

        return finalFriends.filter {!toExclude.contains(it)}.toSet()
    }
}
```
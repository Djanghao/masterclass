# Kotlin | Brute force and math solution

**Author:** mrn0thing
**Votes:** -1
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/2008515/](https://leetcode.com/problems/bulb-switcher-ii/solutions/2008515/)

---

Please, let me know if you have any questions.

```
class Solution {
    class BruteForceSolution {
        // This was the first idea: generate all possible combinations of button presses
        // and simulate it on given bulbs. Clearly it does't fit any time limits :D
        fun flipLights(n: Int, presses: Int): Int {
            val states = HashSet<MutableList<Boolean>>()

            val combinations = mutableListOf<MutableList<Int>>()
            generatePressesCombinations(combinations, MutableList(presses) { -1 }, presses)

            for (combination in combinations) {
                val lights = MutableList(n) { true }
                for (button in combination) {
                    when (button) {
                        1 -> {
                            for (i in 1..lights.size) {
                                toggle(lights, i)
                            }
                        }
                        2 -> {
                            for (i in 1..lights.size) {
                                if (i % 2 == 0) {
                                    toggle(lights, i)
                                }
                            }
                        }
                        3 -> {
                            for (i in 1..lights.size) {
                                if (i % 2 == 1) {
                                    toggle(lights, i)
                                }
                            }
                        }
                        4 -> {
                            for (i in 1..lights.size) {
                                if ((i - 1) % 3 == 0) {
                                    toggle(lights, i)
                                }
                            }
                        }
                    }
                }
                states.add(lights)
            }

            return states.count()
        }

        private fun toggle(lights: MutableList<Boolean>, i: Int) {
            lights[i - 1] = lights[i - 1].not()
        }

        private fun generatePressesCombinations(
            combinations: MutableList<MutableList<Int>>,
            combination: MutableList<Int>,
            pressesRemaining: Int
        ) {
            if (pressesRemaining > 0) {
                for (button in 1..4) {
                    val tempCombination = mutableListOf(*combination.toTypedArray())
                    tempCombination[tempCombination.size - pressesRemaining] = button
                    generatePressesCombinations(combinations, tempCombination, pressesRemaining - 1)
                }
            } else {
                combinations.add(combination)
            }
        }
    }

    class GodHelpMeSolution { // I'm crying xD
        // This solution came to my mind when I realised there is a finite number of states for given bulbs for every n.
        // For different n it is different. So I built a table/graph representing this state machine.
        // What bulbs are switched on:
        // A - all
        // N - none
        // E - evens
        // O - odds
        // A# - all but thirds
        // N# - none but thirds
        // E# - evens except thirds
        // O# - odds except thirds
        // ___| 1B | 2B | 3B | 4B |
        // A  | N  | O  | E  | A# |
        // N  | A  | E  | O  | N# |
        // O  | E  | N  | A  | O# |
        // E  | O  | A  | N  | E# |
        // A# | N# | O# | E# | A  |
        // N# | A# | E# | O# | N  |
        // O# | E# | N# | A# | O  |
        // E# | O# | A# | N# | E  |
        // Starting from 3 bulbs and 3 presses this system can be in 8 different states described in this table.
        // When bulbs and presses are lower than 3 we can count number of states we can reach with use of table above.
        fun flipLights(bulbs: Int, presses: Int): Int {
            return when (bulbs) {
                0 -> 1
                1 -> when (presses) {
                    0 -> 1
                    else -> 2
                }
                2 -> when (presses) {
                    0 -> 1
                    1 -> 3
                    else -> 4
                }
                else -> when (presses) {
                    0 -> 1
                    1 -> 4
                    2 -> 7
                    else -> 8
                }
            }
        }
    }
}
```
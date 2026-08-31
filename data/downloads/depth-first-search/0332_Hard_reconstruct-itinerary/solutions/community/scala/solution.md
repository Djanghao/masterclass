# Scala short, fast solution. Only immutable structures used.

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-itinerary/solutions/4576755/](https://leetcode.com/problems/reconstruct-itinerary/solutions/4576755/)

---

# Intuition
Backtrack: try all the possible jumps in lexographic order, according to the remaining availability.
Every time a path is tried, update the availability accordingly.
This solution uses immutable maps and immutable SortedSets.

# Approach
1. Transform the tickets list into a list of pairs. Not really necessary, but it simplifies the code and avoids running through the first 2 elements of each lists later on
2. Produce an adjacency map from source airport to a lexographically sorted set of destinations that will be used to try paths. This is one liner, thanks to the .groupMapReduce function
3. Backtrack starting at the JFK airport. 
4. If there are no more available tickets, then the solution has been found: just return it.
5. If there are no more jumps, this is a dead end: it's the final airport, but there are no possible routes from there, so fail by returning an empty list
6. Otherwise: for all the possible destinations from the current airport that still have some available ticket, try moving to that by updating the available tickets by either removing the entry, if it's the last ticket for that jump, or by updating the remaining tickets count for it
7. Return the first path tried that returned a result
8. If none returned a result, then return an empty list

# Code
```
object Solution {
  def findItinerary(tickets: List[List[String]]): List[String] = {
    val ticketPairs = tickets.map(l => l.head -> l.tail.head)
    val jumps = ticketPairs.groupMapReduce(_._1)(p => scala.collection.SortedSet(p._2))(_ ++ _)
    val allAvailableTickets = ticketPairs.groupMapReduce(identity)(_ => 1)(_ + _)
    def backtrack(from: String, result: List[String] = List.empty, availableTickets: Map[(String, String), Int] = allAvailableTickets): List[String] = {
        val newResult = from :: result
        if (availableTickets.size == 0) newResult.reverse
        else if (!jumps.isDefinedAt(from)) List.empty
        else {
          jumps(from)
            .toStream
            .map(from -> _)
            .flatMap(ticket => availableTickets.get(ticket).map(_ - 1).map(ticket -> _))
            .collect { 
              case (ticket, 0) =>
                backtrack(ticket._2, newResult, availableTickets.removed(ticket))
              case (ticket, remainingAvailability) =>
                backtrack(ticket._2, newResult, availableTickets.updated(ticket, remainingAvailability))
            }
            .collectFirst { 
              case destinationList if destinationList.nonEmpty =>
                destinationList
            }
            .getOrElse(List.empty)
        }
      }
    backtrack("JFK")
  }
}
```
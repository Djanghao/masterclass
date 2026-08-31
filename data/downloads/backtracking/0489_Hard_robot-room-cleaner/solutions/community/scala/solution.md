# Simple DFS, idiomatic Scala

**Author:** mmgm
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/4741565/](https://leetcode.com/problems/robot-room-cleaner/solutions/4741565/)

---

# Intuition
It's a robot, we don't care if it works harder than it must to clean the room. DFS is good enough.

# Approach
Simple stack-based DFS algorithm with various state variables modeled as Scala case classes, extension to Robot interface implemented as Scala implicit class.
Small trick needed to keep robot state synced up with our stored state (documented inline)

# Code
```
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * class Robot {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     def move(): Boolean = {}
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     def turnLeft(): Unit = {}
 *     def turnRight(): Unit = {}
 *
 *     // Clean the current cell.
 *     def clean(): Unit = {}
 * }
 */

import scala.collection.mutable

object Solution {

  sealed trait Direction {
    def opposite: Direction
  }
  case object Up extends Direction {
    override def opposite: Direction = Down
  }
  case object Down extends Direction {
    override def opposite: Direction = Up
  }
  case object Left extends Direction {
    override def opposite: Direction = Right
  }
  case object Right extends Direction {
    override def opposite: Direction = Left
  }

  case class Position(x: Int, y: Int) {
    def move(direction: Direction): Position = direction match {
      case Up => Position(x, y+1)
      case Down => Position(x, y-1)
      case Left => Position(x-1, y)
      case Right => Position(x+1, y)
    }
  }

  case class RobotState(var position: Position, var direction: Direction) {
    def moved(directionToMove: Direction): RobotState = {
      RobotState(position.move(directionToMove), directionToMove)
    }
  }

  def cleanRoom(robot: Robot): Unit = {
    val visited = mutable.Set[Position]()

    def clean(implicit robotState: RobotState): Unit = {
      val originalDirection = robotState.direction
      robot.clean()
      visited.add(robotState.position)

      for (direction <- Seq(Up, Right, Left, Down)) {
        if (!visited.contains(robotState.position.move(direction))) {
          robot.orientate(direction)
          if (robot.move()) {
            clean(robotState.moved(direction))
            robot.orientate(direction.opposite)
            robot.move()
          }
        }
      }
      // clean(robotState.moved(direction)) above creates a new RobotState 
      // object, so any mutations to the direction made inside clean will
      // be lost when it returns. A simple way to work around that is to
      // always return facing the same direction you came in.
      robot.orientate(originalDirection)
    }

    clean(RobotState(Position(0,0), Up))
  }

  implicit class RobotHelper(robot: Robot) {
    def orientate(direction: Direction)(implicit robotState: RobotState): Unit = {
      robotState.direction match {
        case Up => direction match {
          case Up =>
          case Down =>
            robot.turnLeft()
            robot.turnLeft()
          case Left => robot.turnLeft()
          case Right => robot.turnRight()
        }
        case Down => direction match {
          case Up =>
            robot.turnLeft()
            robot.turnLeft()
          case Down =>
          case Left => robot.turnRight()
          case Right => robot.turnLeft()
        }
        case Left => direction match {
          case Up => robot.turnRight()
          case Down => robot.turnLeft()
          case Left =>
          case Right =>
            robot.turnLeft()
            robot.turnLeft()
        }
        case Right => direction match {
          case Up => robot.turnLeft()
          case Down => robot.turnRight()
          case Left =>
            robot.turnLeft()
            robot.turnLeft()
          case Right =>
        }
      }

      robotState.direction = direction
    }
  }
}
```
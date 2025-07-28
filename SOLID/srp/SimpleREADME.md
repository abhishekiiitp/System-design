# Simple Single Responsibility Principle (SRP) Example

## What is SRP?

**Single Responsibility Principle**: A class should have only **one reason to change**.

In simple terms: **One class = One job**

## The Example

We have a calculator that can:
1. Do math (add, multiply)
2. Save results to a file

## ❌ WRONG Way (Violates SRP)

```java
class CalculatorViolation {
    public int add(int a, int b) {
        int result = a + b;
        saveToFile("Addition: " + a + " + " + b + " = " + result); // ❌ File operation inside math class
        return result;
    }
    
    private void saveToFile(String data) { // ❌ File operations in math class
        System.out.println("Saving to file: " + data);
    }
}
```

**Problems:**
- This class does TWO jobs: Math + File operations
- If math rules change → modify this class
- If file format changes → modify this class
- Hard to test math without file operations
- Hard to reuse math without file operations

## ✅ RIGHT Way (Follows SRP)

```java
// Class 1: Only does math
class Calculator {
    public int add(int a, int b) {
        return a + b; // Only math!
    }
}

// Class 2: Only handles files
class FileLogger {
    public void saveToFile(String data) {
        System.out.println("Saving to file: " + data); // Only file operations!
    }
}

// Class 3: Combines both (optional)
class CalculatorService {
    private Calculator calculator;
    private FileLogger fileLogger;
    
    public int addAndLog(int a, int b) {
        int result = calculator.add(a, b); // Use math class
        fileLogger.saveToFile("Result: " + result); // Use file class
        return result;
    }
}
```

**Benefits:**
- Calculator can be used without file operations
- FileLogger can be used for other purposes
- Easy to test math operations separately
- Easy to change file format without touching math
- Each class has only ONE reason to change

## How to Run

```bash
# Compile
javac SimpleExample.java

# Run
java solid.srp.SimpleExample
```

## Key Takeaway

**Before writing a class, ask yourself:**
- What is this class's ONE job?
- Can I describe what this class does in ONE sentence?
- If requirements change, will this class change for multiple reasons?

If you answer "yes" to the last question, your class probably violates SRP!

## Simple Rule

**One class = One responsibility = One reason to change** 
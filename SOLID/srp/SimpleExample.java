package solid.srp;

/**
 * Very Simple Example of Single Responsibility Principle
 * 
 * Scenario: A calculator that can add numbers and also save results to a file
 */

// ❌ VIOLATION of SRP - This class has TWO responsibilities
class CalculatorViolation {
    
    // Responsibility 1: Mathematical operations
    public int add(int a, int b) {
        int result = a + b;
        
        // Responsibility 2: File operations (should be separate!)
        saveToFile("Addition: " + a + " + " + b + " = " + result);
        
        return result;
    }
    
    public int multiply(int a, int b) {
        int result = a * b;
        saveToFile("Multiplication: " + a + " * " + b + " = " + result);
        return result;
    }
    
    // This method belongs to a different responsibility
    private void saveToFile(String data) {
        System.out.println("Saving to file: " + data);
        // In real code, this would write to a file
    }
}

// ✅ CORRECT implementation following SRP

// Class 1: Only handles mathematical operations
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public int subtract(int a, int b) {
        return a - b;
    }
}

// Class 2: Only handles file operations
class FileLogger {
    public void saveToFile(String data) {
        System.out.println("Saving to file: " + data);
        // In real code, this would write to a file
    }
}

// Class 3: Orchestrates the operations (optional)
class CalculatorService {
    private Calculator calculator;
    private FileLogger fileLogger;
    
    public CalculatorService() {
        this.calculator = new Calculator();
        this.fileLogger = new FileLogger();
    }
    
    public int addAndLog(int a, int b) {
        int result = calculator.add(a, b);
        fileLogger.saveToFile("Addition: " + a + " + " + b + " = " + result);
        return result;
    }
    
    public int multiplyAndLog(int a, int b) {
        int result = calculator.multiply(a, b);
        fileLogger.saveToFile("Multiplication: " + a + " * " + b + " = " + result);
        return result;
    }
}

// Demo class to show the difference
public class SimpleExample {
    
    public static void main(String[] args) {
        System.out.println("=== SIMPLE SRP EXAMPLE ===\n");
        
        // ❌ Violation Example
        System.out.println("❌ VIOLATION of SRP:");
        System.out.println("CalculatorViolation class does TWO things:");
        System.out.println("1. Mathematical calculations");
        System.out.println("2. File operations");
        System.out.println();
        
        CalculatorViolation badCalculator = new CalculatorViolation();
        int result1 = badCalculator.add(5, 3);
        System.out.println("Result: " + result1);
        
        System.out.println("\nProblems with this approach:");
        System.out.println("- If math rules change → modify this class");
        System.out.println("- If file format changes → modify this class");
        System.out.println("- Hard to test math without file operations");
        System.out.println("- Hard to reuse math without file operations");
        
        System.out.println("\n" + "=".repeat(40));
        
        // ✅ Correct Example
        System.out.println("\n✅ CORRECT SRP Implementation:");
        System.out.println("Each class has ONE responsibility:");
        System.out.println("- Calculator: Only math operations");
        System.out.println("- FileLogger: Only file operations");
        System.out.println("- CalculatorService: Orchestrates both (optional)");
        System.out.println();
        
        CalculatorService goodCalculator = new CalculatorService();
        int result2 = goodCalculator.addAndLog(5, 3);
        System.out.println("Result: " + result2);
        
        System.out.println("\nBenefits of this approach:");
        System.out.println("- Calculator can be used without file operations");
        System.out.println("- FileLogger can be used for other purposes");
        System.out.println("- Easy to test math operations separately");
        System.out.println("- Easy to change file format without touching math");
        System.out.println("- Each class has only ONE reason to change");
        
        // Show that Calculator can be used independently
        System.out.println("\n--- Using Calculator independently ---");
        Calculator mathOnly = new Calculator();
        System.out.println("Math only: " + mathOnly.add(10, 20));
        System.out.println("Math only: " + mathOnly.multiply(4, 5));
        
        // Show that FileLogger can be used independently
        System.out.println("\n--- Using FileLogger independently ---");
        FileLogger fileOnly = new FileLogger();
        fileOnly.saveToFile("Some other data");
    }
} 
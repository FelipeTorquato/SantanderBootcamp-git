package one.digitalInnovation;

public class Calculadora {
    public static void soma(double num1, double num2) {
        double resultado = num1 + num2;
        System.out.println("O resultado da soma de " + num1 + " e " + num2 + " é " + resultado);
    }

    public static void subtracao(double num1, double num2) {
        double resultado = num1 - num2;
        System.out.println("O resultado da subtração de " + num1 + " e " + num2 + " é " + resultado);
    }

    public static void multiplicacao(double num1, double num2) {
        double resultado = num1 * num2;
        System.out.println("O resultado da multiplicação de " + num1 + " e " + num2 + " é " + resultado);
    }

    public static void divisao(double num1, double num2) {
        double resultado = num1 / num2;
        System.out.println("O resultado da divisão de " + num1 + " e " + num2 + " é " + resultado);
    }
}

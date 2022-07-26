package br.com.dio.exercicios.loops;

/*
Faça um programa que peça N números inteiros,
calcule e mostre a quantidade de números pares
e a quantidade de números impares.
*/

import java.util.Scanner;

public class Ex4_ParEImpar {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int quantNumeros, num, quantPares = 0, quantImpares = 0, count = 0;

        System.out.print("Quantidade de números: ");
        quantNumeros = scan.nextInt();

        do {
            System.out.print("Número: ");
            num = scan.nextInt();
            if (num % 2 == 0) {
                quantPares++;
            } else {
                quantImpares++;
            }
            count++;
        } while (count < quantNumeros);

        System.out.println("Quantidade Par: " + quantPares);
        System.out.println("Quantidade Ímpar: " + quantImpares);
    }
}

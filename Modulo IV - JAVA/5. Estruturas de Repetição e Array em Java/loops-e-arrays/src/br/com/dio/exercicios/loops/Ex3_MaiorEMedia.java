package br.com.dio.exercicios.loops;

/*
Faça um programa que leia 5 números
e informe o maior número
e a média desses números.
*/

import java.util.Scanner;

public class Ex3_MaiorEMedia {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num, maior = 0, soma = 0, count = 0;
        do {
            System.out.print("Número: ");
            num = scan.nextInt();
            soma += num;
            if (num > maior) {
                maior = num;
            }
            count++;
        } while (count < 5);
        System.out.println("Maior: " + maior);
        System.out.println("Média: " + (soma/count));
    }
}

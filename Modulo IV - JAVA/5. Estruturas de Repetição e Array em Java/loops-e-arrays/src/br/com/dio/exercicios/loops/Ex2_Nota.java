package br.com.dio.exercicios.loops;

/*
Faça um programa que peça uma nota, entre zero e dez.
Mostre uma mensagem caso o valor seja inválido
e continue pedindo
até que o usuário informe um valor válido.
*/

import java.util.Scanner;

public class Ex2_Nota {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num = -1;
        while (true) {
            System.out.print("Digite um número: ");
            num = scan.nextInt();
            if (num > 10 || num < 0) {
                System.out.println("Numero " + num + " inválido.");
            } else {
                break;
            }
        }
        System.out.println("Numero " + num + " válido.");
    }
}

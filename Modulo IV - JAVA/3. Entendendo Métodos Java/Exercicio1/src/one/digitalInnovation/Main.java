package one.digitalInnovation;

public class Main {
    public static void main(String[] args) {
        System.out.println("Exercídio Calculadora");
        Calculadora.soma(3, 2);
        Calculadora.subtracao(3, 2);
        Calculadora.multiplicacao(3, 2);
        Calculadora.divisao(3, 2);

        System.out.println("Exercício Mensagem");
        Mensagem.obterMensagem(9);
        Mensagem.obterMensagem(14);
        Mensagem.obterMensagem(1);

        System.out.println("Exercício Empréstimo");
        Emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
        Emprestimo.calcular(1000, Emprestimo.getTresParcelas());
        Emprestimo.calcular(1000, 5);
    }
}

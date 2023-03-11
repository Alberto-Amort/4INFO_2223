#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define RIGHE 3
#define COLONNE 7

int numero_random(int min, int max){
    return (rand() % (max - min + 1)) + min;
}

void riempi_matrice_colonne(int vettore[][COLONNE], int righe, int colonne){
    for (int i = 0; i < colonne; i++){
        for (int j = 0; j < righe; j++){
            vettore[i][j] = numero_random(0, 100);
        }
    }
}

void riempi_matrice_righe(int vettore[][COLONNE], int righe, int colonne){
    for (int i = 0; i < righe; i++){
        for (int j = 0; j < colonne; j++){
            vettore[i][j] = numero_random(0, 100);
        }
    }
}

void azzera_matrice(int vettore[][COLONNE], int righe, int colonne){
    for (int i = 0; i < righe; i++){
        for (int j = 0; j < colonne; j++){
            vettore[i][j] = 0;
        }
    }
}

void stampa(int vettore[][COLONNE], int righe, int colonne){
    for(int i = 0; i < righe; i++){
        for(int j = 0; j < colonne; j++){
            printf("{%.2d} ", vettore[i][j]);
        }
        printf("\n");
    }    
}

int main(){
    int mia_matrice[RIGHE][COLONNE];
    srand(time(NULL));

    azzera_matrice(mia_matrice, RIGHE, COLONNE);
    stampa(mia_matrice, RIGHE, COLONNE);

    return 0;
}
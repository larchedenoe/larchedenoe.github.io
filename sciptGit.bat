ECHO OFF
ECHO Ajout des fichier au Commit
git add *
ECHO Creation du commit
git commit -m "Maj du site"
ECHO push du site sur github
git pull
git push
ECHO Le site est mis à jour
PAUSE
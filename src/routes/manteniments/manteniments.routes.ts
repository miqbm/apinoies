import { Router } from "express";
import * as tipusRobaCtrl from "./TipusRoba/tipusRoba.controller";
import * as robaCtrl from "./Roba/roba.controller";
import * as conyCtrl from "./Cony/cony.controller";
import * as tetesCtrl from "./Teta/teta.controller";
import * as bellesaCaraCtrl from "./BellesaCara/bellesacara.controller";
import * as bellesaCosCtrl from "./BellesaCos/bellesacos.controller";
import * as colorCabellCtrl from "./CabellColor/cabellcolor.controller";
import * as tipusCabellCtrl from "./CabellTipus/cabelltipus.controller";
import * as paisCtrl from "./Pais/pais.controller";
import * as posturaCtrl from "./PosturaFoto/postura.controller";
import * as situacioCtrl from "./SituacioFoto/situacio.controller";
import * as vistaCtrl from "./VistaFoto/vista.controller";
import * as titolCtrl from "./Titol/titol.controller";
import * as accioCtrl from "./Accio/accio.controller";

//Al final assigno la ruta /rudatDefecte/... a totes les rutes de manteniments
//amb router.use(rutaDefecte, router)
//Si canvio el valor de rutaDefecte, també l'he de canviar al arxiu
//manteniments.http per poguer provar les api
export const rutaDefecte: string = "/manteniments";

const router = Router();

//Tipus roba
router.post("/tipusroba", tipusRobaCtrl.addTipusRoba);
router.get("/tipusroba", tipusRobaCtrl.getTipusRobes);
router.get("/tipusroba/:id", tipusRobaCtrl.getTIpusRoba);
router.delete("/tipusroba/:id", tipusRobaCtrl.deleteTipusRoba);
router.put("/tipusroba/:id", tipusRobaCtrl.updateTipusRoba);

//Roba
router.get("/roba", robaCtrl.getRobes);
router.get("/roba/:id", robaCtrl.getRoba);
router.delete("/roba/:id", robaCtrl.deleteRoba);
router.post("/roba", robaCtrl.insertaRoba);
router.put("/roba/:id", robaCtrl.updateRoba);

//Conys
router.get("/cony", conyCtrl.getConys);
router.get("/cony/:id", conyCtrl.getCony);
router.post("/cony", conyCtrl.addCony);
router.delete("/cony/:id", conyCtrl.deleteCony);
router.put("/cony/:id", conyCtrl.updateCony);

//Tetes
router.get("/tetes", tetesCtrl.getTetes);
router.get("/tetes/:id", tetesCtrl.getTeta);
router.post("/tetes", tetesCtrl.addTetes);
router.delete("/tetes/:id", tetesCtrl.deleteTetes);
router.put("/tetes/:id", tetesCtrl.updateTetes);

//Bellesa cara
router.get("/cara", bellesaCaraCtrl.getBellesaCares);
router.get("/cara/:id", bellesaCaraCtrl.getBellesaCara);
router.post("/cara", bellesaCaraCtrl.addBellesaCara);
router.delete("/cara/:id", bellesaCaraCtrl.deleteBellesaCara);
router.put("/cara/:id", bellesaCaraCtrl.updateBellesaCara);

//Bellesa cos
router.get("/cos", bellesaCosCtrl.getBellesaCossos);
router.get("/cos/:id", bellesaCosCtrl.getBellesaCos);
router.post("/cos", bellesaCosCtrl.addBellesaCos);
router.delete("/cos/:id", bellesaCosCtrl.deleteBellesaCos);
router.put("/cos/:id", bellesaCosCtrl.updateBellesaCos);

//Color de cabell
router.get("/cabellcolor", colorCabellCtrl.getColorsCabell);
router.get("/cabellcolor/:id", colorCabellCtrl.getColorCabell);
router.post("/cabellcolor", colorCabellCtrl.addColorCabell);
router.delete("/cabellcolor/:id", colorCabellCtrl.deleteColorCabell);
router.put("/cabellcolor/:id", colorCabellCtrl.updateColorCabell);

//Tipus de cabell
router.get("/cabelltipus", tipusCabellCtrl.getTipusCabells);
router.get("/cabelltipus/:id", tipusCabellCtrl.getTipusCabell);
router.post("/cabelltipus", tipusCabellCtrl.addTipusrCabell);
router.delete("/cabelltipus/:id", tipusCabellCtrl.deleteTipusCabell);
router.put("/cabelltipus/:id", tipusCabellCtrl.updateTipusCabell);

//Paisos
router.get("/pais", paisCtrl.getPaisos);
router.get("/pais/:id", paisCtrl.getPais);
router.post("/pais", paisCtrl.addPais);
router.delete("/pais/:id", paisCtrl.deletePais);
router.put("/pais/:id", paisCtrl.updatePais);

//Postures
router.get("/postura", posturaCtrl.getPostures);
router.get("/postura/:id", posturaCtrl.getPostura);
router.post("/postura", posturaCtrl.addPostura);
router.delete("/postura/:id", posturaCtrl.deletePostura);
router.put("/postura/:id", posturaCtrl.updatePostura);

//Situacions
router.get("/situacio", situacioCtrl.getSituacions);
router.get("/situacio/:id", situacioCtrl.getSituacio);
router.post("/situacio", situacioCtrl.addSituacio);
router.delete("/situacio/:id", situacioCtrl.deleteSituacio);
router.put("/situacio/:id", situacioCtrl.updateSituacio);

//Vistes
router.get("/vista", vistaCtrl.getVistes);
router.get("/vista/:id", vistaCtrl.getVista);
router.post("/vista", vistaCtrl.addVista);
router.delete("/vista/:id", vistaCtrl.deleteVista);
router.put("/vista/:id", vistaCtrl.updateVista);

//Titol
router.get("/titol", titolCtrl.getTitols);
router.get("/titol/:id", titolCtrl.getTitol);
router.post("/titol", titolCtrl.addTitol);
router.delete("/titol/:id", titolCtrl.deleteTitol);
router.put("/titol/:id", titolCtrl.updateTitol);

//Accio
router.get("/accio", accioCtrl.getAccions);
router.get("/accio/:id", accioCtrl.getAccio);
router.post("/accio", accioCtrl.addAccio);
router.delete("/accio/:id", accioCtrl.deleteAccio);
router.put("/accio/:id", accioCtrl.updateAccio);

router.use(rutaDefecte, router);

export default router;

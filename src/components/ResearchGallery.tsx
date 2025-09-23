"use client";
import { Fragment, useState } from "react";

type ImgMeta = { src: string; title: string; caption: string };

const CANDIDATES: ImgMeta[] = [
  {
    src: "/research/demand_voting_vs_real.png",
    title: "Predicción Voting vs Real",
    caption: "Ajuste del Voting Regressor frente a la demanda real",
  },
  {
    src: "/research/ensemble_comparison.png",
    title: "Comparación de Métodos Ensemble",
    caption: "Rendimiento relativo de modelos (R² y MSE normalizado)",
  },
  {
    src: "/research/abc_confusion_matrix.png",
    title: "Clasificación ABC - Matriz de Confusión",
    caption: "Desempeño del clasificador ABC en medicamentos",
  },
  {
    src: "/research/voting_residuals.png",
    title: "Residuales del Modelo Voting",
    caption: "Patrón de residuales vs predicciones (calidad del ajuste)",
  },
  {
    src: "/research/residuals_hist.png",
    title: "Distribución de Errores (Histograma)",
    caption: "Cómo se reparten los errores del modelo en general",
  },
  {
    src: "/research/residuals_qq.png",
    title: "Normalidad de Errores (Q-Q)",
    caption: "Chequeo visual de colas/sesgos en los errores",
  },
  {
    src: "/research/abs_error_vs_pred.png",
    title: "Error Absoluto vs Predicción",
    caption: "Si el error crece con la magnitud de la demanda",
  },
  {
    src: "/research/feature_importance.png",
    title: "Variables Más Influyentes",
    caption: "Qué factores pesan más en la predicción",
  },
  {
    src: "/research/pdp_features.png",
    title: "Efecto de Variables (PDP)",
    caption: "Cómo cambia la predicción al variar una variable",
  },
  {
    src: "/research/abc_roc_curves.png",
    title: "ROC por Clase ABC",
    caption: "Capacidad de distinguir cada clase (AUC)",
  },
  {
    src: "/research/abc_pr_curves.png",
    title: "Precision-Recall por Clase ABC",
    caption: "Calidad de detección bajo clases desbalanceadas",
  },
];

const DETAILS: Record<string, { intro: string; bullets: string[]; notes?: string; example?: string; glossary?: { term: string; def: string }[] }>= {
  "/research/demand_voting_vs_real.png": {
    intro:
      "Cada punto es un medicamento. Si el punto cae sobre la diagonal, el valor predicho y el real coinciden. Cuanto más cerca de la diagonal, mejor el ajuste.",
    bullets: [
      "Cercanía a la diagonal = mayor precisión",
      "Nube estrecha = errores pequeños y consistentes",
      "Puntos muy alejados (outliers) invitan a revisar datos o segmentar",
    ],
    notes: "Nos da confianza para usar el modelo en medicamentos críticos.",
    example: "Si un antihipertensivo de alta rotación cae cerca de la diagonal, el stock proyectado para el próximo mes es confiable.",
    glossary: [
      { term: "Predicción vs Real", def: "Comparación directa entre lo estimado por el modelo y lo observado en la realidad." },
      { term: "Residual", def: "Diferencia entre el valor real y el predicho (idealmente cercano a 0)." },
      { term: "Outlier", def: "Punto atípico con error grande; puede requerir revisión o segmentación." },
    ],
  },
  "/research/ensemble_comparison.png": {
    intro:
      "Comparamos varios métodos. En simple: queremos explicaciones más altas (R²) y errores más bajos (RMSE).",
    bullets: [
      "R² alto = el modelo capta mejor los patrones",
      "RMSE bajo = comete menos errores grandes",
      "Elegimos el modelo con mejor equilibrio entre ambas métricas",
    ],
    notes: "Evidencia objetiva para seleccionar el modelo a producción.",
    example: "Si Voting tiene R²≈0.97 y menor RMSE, se prioriza para el plan de compras.",
    glossary: [
      { term: "R²", def: "Cuánto del comportamiento real explica el modelo (más alto es mejor)." },
      { term: "RMSE", def: "Tamaño típico del error; penaliza más los errores grandes (más bajo es mejor)." },
      { term: "MSE", def: "Error cuadrático medio; base del RMSE (RMSE = √MSE)." },
    ],
  },
  "/research/abc_confusion_matrix.png": {
    intro:
      "Muestra cuántos elementos de cada clase (A, B, C) acierta o confunde el modelo. La diagonal idealmente debe ser alta.",
    bullets: [
      "Más valor en diagonal = más aciertos",
      "Confundir A con C es lo más costoso; hay que minimizarlo",
      "Ayuda a definir umbrales y reentrenar si hay desbalance",
    ],
    notes: "Soporta la priorización ABC para decisiones EOQ/ROP.",
    example: "Si la clase A casi no se confunde con C, reducimos quiebres en fármacos críticos.",
    glossary: [
      { term: "Clases ABC", def: "A = muy críticos/alto valor; B = intermedios; C = baja criticidad/valor." },
      { term: "EOQ", def: "Cantidad Económica de Pedido que minimiza costo total (ordenar vs mantener inventario)." },
      { term: "ROP", def: "Punto de Reorden; nivel de inventario en el que se dispara un nuevo pedido." },
    ],
  },
  "/research/voting_residuals.png": {
    intro:
      "Diferencia entre lo real y lo predicho (residual) contra el valor predicho. Queremos una nube centrada en 0 sin patrones raros.",
    bullets: [
      "Centrado en 0 = sin sesgos sistemáticos",
      "Patrones curvos/abanico = revisar variables o ajustes",
      "Ayuda a decidir transformaciones o nuevos hiperparámetros",
    ],
    example: "Si la nube es pareja alrededor de 0, el modelo no sobrestima ni subestima de forma sistemática.",
    glossary: [
      { term: "Residual", def: "Real − Predicho; positivo si subestimamos, negativo si sobreestimamos." },
      { term: "Sesgo", def: "Tendencia del modelo a sobre/infraestimar de forma sistemática." },
      { term: "Heterocedasticidad", def: "Errores que crecen o cambian con el nivel de la predicción." },
    ],
  },
  "/research/residuals_hist.png": {
    intro:
      "¿Cómo se reparten los errores del modelo? Un histograma balanceado a izquierda y derecha del 0 indica estabilidad.",
    bullets: [
      "Pico cerca de 0 = muchos aciertos",
      "Colas muy largas = algunos errores grandes a vigilar",
      "Útil para monitorear el desempeño en el tiempo",
    ],
    glossary: [
      { term: "Residual", def: "Diferencia entre real y predicho (ideal: concentrado cerca de 0)." },
      { term: "Sesgo", def: "Desplazamiento del histograma hacia positivos/negativos." },
      { term: "Colas", def: "Errores extremos; conviene investigarlos si son frecuentes." },
    ],
    example: "Pico en 0 indica que la mayoría de medicamentos quedan bien estimados.",
  },
  "/research/residuals_qq.png": {
    intro:
      "Comparamos los errores con una distribución ideal. Si los puntos siguen la línea, los errores son predecibles y sin colas extremas.",
    bullets: [
      "Puntos sobre la línea = comportamiento esperado",
      "Desviaciones en extremos = colas pesadas (errores extremos)",
      "Ayuda a anticipar riesgos en medicamentos sensibles",
    ],
    glossary: [
      { term: "Q–Q Plot", def: "Gráfico que compara cuantiles de los datos con una referencia teórica." },
      { term: "Cuantiles", def: "Puntos que dividen los datos ordenados; usados para comparar distribuciones." },
      { term: "Colas Pesadas", def: "Mayor probabilidad de errores extremos que la esperada." },
    ],
    example: "Puntos alineados sugieren que errores extremos serán raros.",
  },
  "/research/abs_error_vs_pred.png": {
    intro:
      "¿A mayor demanda, errores mayores? Si los puntos suben al aumentar la predicción, hay que ajustar para evitar saturaciones.",
    bullets: [
      "Tendencia plana = error estable",
      "Tendencia ascendente = revisar heterocedasticidad",
      "Relevante para planear stock de alto volumen",
    ],
    glossary: [
      { term: "Error Absoluto", def: "Tamaño del error sin signo; útil para medir magnitud de desvío." },
      { term: "Heterocedasticidad", def: "Errores que crecen con la predicción; sugiere ajustes al modelo/stock." },
      { term: "Alta Demanda", def: "Ítems con volúmenes altos; sensibles a pequeños % de error." },
    ],
    example: "Si para oncológicos (predicción alta) el error sube, ajustamos stock de seguridad.",
  },
  "/research/feature_importance.png": {
    intro:
      "Ranking de variables que más pesan en la predicción. Permite explicar "
      + "por qué el modelo decide así y dónde enfocar mejoras.",
    bullets: [
      "Top variables = palancas de negocio",
      "Sirve para auditoría y transparencia",
      "Orienta la recolección de mejores datos",
    ],
    glossary: [
      { term: "Importancia", def: "Contribución relativa de cada variable al modelo." },
      { term: "Interpretabilidad", def: "Capacidad de explicar por qué el modelo decide así." },
      { term: "Palancas", def: "Variables que, al mejorar, mueven el resultado de negocio." },
    ],
    example: "Si lead time y estacionalidad dominan, enfocamos medir y mejorar esas variables.",
  },
  "/research/pdp_features.png": {
    intro:
      "Vemos cómo cambia la predicción al mover una variable, manteniendo las demás constantes. Es una explicación local simple.",
    bullets: [
      "Curvas claras = relaciones entendibles",
      "Zonas planas = variable con poco efecto",
      "Ayuda a diseñar políticas (p. ej., tiempos de reposición)",
    ],
    glossary: [
      { term: "PDP", def: "Partial Dependence Plot; muestra el efecto promedio de una variable." },
      { term: "Efecto marginal", def: "Cómo cambia la predicción al variar una sola variable." },
      { term: "Ceteris paribus", def: "Manteniendo las demás variables constantes." },
    ],
    example: "Si mayor lead time eleva la demanda prevista, subimos stock de seguridad.",
  },
  "/research/abc_roc_curves.png": {
    intro:
      "Mide qué tan bien distingue cada clase (A/B/C). Curvas más altas y AUC cercano a 1 son mejores.",
    bullets: [
      "Curvas por encima de la diagonal = útil",
      "AUC alto = mejor separación",
      "Comparar clases para priorizar mejoras",
    ],
    glossary: [
      { term: "AUC", def: "Área bajo la curva ROC; 1 es perfecto, 0.5 es azar." },
      { term: "TPR/FPR", def: "Tasa de verdaderos positivos / falsos positivos (sensibilidad vs falsas alarmas)." },
      { term: "Umbral", def: "Punto de decisión para clasificar; mueve el balance entre TPR y FPR." },
    ],
    example: "AUC alto en A implica buena identificación de fármacos críticos.",
  },
  "/research/abc_pr_curves.png": {
    intro:
      "En escenarios con clases desbalanceadas, Precision-Recall describe mejor el desempeño. Buscamos curvas altas.",
    bullets: [
      "Precisión = qué tan confiables son los aciertos",
      "Recall = cuántos verdaderos positivos capturamos",
      "Balancear según el costo de errores por clase",
    ],
    glossary: [
      { term: "Precisión", def: "Proporción de aciertos que realmente eran positivos (confiabilidad)." },
      { term: "Recall", def: "Proporción de positivos reales que detectamos (sensibilidad)." },
      { term: "Trade-off", def: "Equilibrio entre encontrar más casos (recall) sin perder precisión." },
    ],
    example: "Curva PR alta para A indica alertas correctas sin perder muchos casos verdaderos.",
  },
};

function toWebp(src: string) {
  // Si el src es .png, usamos la misma ruta con .webp, si no, devolvemos null
  return src.endsWith('.png') ? src.replace(/\.png$/i, '.webp') : null;
}

export default function ResearchGallery() {
  // Cargar candidatos y ocultar dinámicamente los que fallen al cargar
  const [images, setImages] = useState<ImgMeta[]>(CANDIDATES);
  const [open, setOpen] = useState<ImgMeta | null>(null);

  if (!images.length) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Gráficos Clave</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <figure
            key={img.src}
            className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:shadow cursor-zoom-in"
            onClick={() => setOpen(img)}
            role="button"
            aria-label={`Abrir detalle: ${img.title}`}
          >
            <picture>
              {toWebp(img.src) && (
                <source srcSet={toWebp(img.src)!} type="image/webp" />
              )}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto rounded-lg"
                onError={() => setImages((prev) => prev.filter((i) => i.src !== img.src))}
              />
            </picture>
            <figcaption className="mt-3">
              <div className="font-semibold text-slate-900">{img.title}</div>
              <div className="text-sm text-slate-600">{img.caption}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h4 className="text-xl font-bold text-slate-900">{open.title}</h4>
              <button
                className="text-slate-500 hover:text-slate-700 text-2xl"
                onClick={() => setOpen(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-4 bg-slate-50">
                <picture>
                  {toWebp(open.src) && (
                    <source srcSet={toWebp(open.src)!} type="image/webp" />
                  )}
                  <img src={open.src} alt={open.title} className="w-full h-auto rounded-lg" />
                </picture>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-3">{DETAILS[open.src]?.intro || open.caption}</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  {(DETAILS[open.src]?.bullets || []).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {DETAILS[open.src]?.example && (
                  <div className="mt-4 text-sm bg-blue-50 text-blue-800 rounded-lg p-3">
                    <span className="font-semibold">Ejemplo: </span>
                    {DETAILS[open.src]?.example}
                  </div>
                )}
                {DETAILS[open.src]?.notes && (
                  <div className="mt-4 text-sm text-slate-500">{DETAILS[open.src]?.notes}</div>
                )}
                {/* Glosario específico del gráfico */}
                {DETAILS[open.src]?.glossary && DETAILS[open.src]!.glossary!.length > 0 && (
                  <div className="mt-6 border-t pt-4">
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Glosario rápido</div>
                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                      {DETAILS[open.src]!.glossary!.map((g: { term: string; def: string }) => (
                        <div key={g.term} className="bg-slate-100 rounded-lg p-2">
                          <dt className="font-semibold text-slate-800">{g.term}</dt>
                          <dd className="text-slate-700">{g.def}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

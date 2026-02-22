---
title: 'Patron Test'
image: '../images/habitMenuBlack.png'
images:
  - '../images/examStart.gif'
  - '../images/exam.gif'
  - '../images/testStart.gif'
  - '../images/test.gif'
  - '../images/results.gif'
  - '../images/filters.gif'
repoUrl: https://github.com/0re0re0/iOSPatronTestReadme/tree/main

summary: 'iOS app para preparar los examenes de PER y PNB'
draft: false
isInConstruction: false
isFeatured: true
tags:
  - iOS
  - SwiftUI
  - MVVM
  - Clean
  - Firebase
  - SwiftData
  - Coordinator

---

Patron Test es una aplicación iOS nativa diseñada para ayudar a obtener las titulaciones náuticas PER (Patrón de Embarcaciones de Recreo) y PNB (Patrón de Navegación Básica). Ofrece una experiencia moderna y sin distracciones para practicar por temas o simular exámenes reales ajustados al BOE, con revisión detallada del progreso.


## Características principales
- Gestión de licencias: PER o PNB, con contenidos, iconos y criterios de evaluación adaptados automáticamente.
- Modo Examen (simulación real): mismo número de preguntas y distribución por unidades que el examen oficial; corrección automática con criterios de aprobado/suspenso.
- Tests por unidad: 11 unidades temáticas para estudio focalizado; feedback inmediato opcional para aprender de cada error.
- Historial y análisis: listado completo de tests y exámenes; filtros por tipo (examen/unidad), estado (aprobado/suspenso) y unidad; gestión y eliminación de resultados antiguos. Todo se guarda localmente en el dispositivo.

## Stack tecnológico
- Lenguaje: Swift 5.9
- UI: SwiftUI
- Arquitectura: Clean Architecture + MVVM + Coordinator
- Persistencia local: SwiftData (tests y progreso); UserDefaults para preferencias ligeras
- Backend/configuración remota: Firebase (Firestore y Remote Config)
- Inyección de dependencias: contenedor propio (AppContainer)
- Gestión de estados: ObservableObject / @Published

## Arquitectura y organización
- Presentación (MVVM + Coordinator): Views declarativas, ViewModels para la lógica de presentación y Coordinators para la navegación.
- Dominio: Use Cases con lógica de negocio pura, Entities y protocolos de Repositories.
- Datos: Implementación de Repositories y Data Sources locales (SwiftData, UserDefaults) y remotos (Firebase).

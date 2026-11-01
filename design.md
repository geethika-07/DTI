# run.io — Design System & Product Guidelines

## 1. Product Overview

run.io is a location-based fitness and territory-conquest mobile game that gamifies running and jogging.

Players physically move through real-world locations to capture geographical territories. They compete against other players, defend their territories, participate in timed competitions and climb leaderboards.

The application combines fitness tracking, multiplayer gaming and social competition.

### Core Concept

Move. Capture. Compete.

Every run should contribute towards expanding a player's territory and improving their position in the game.

### Reference Application

SeizeIO — Claim Your Ground.

Use it as inspiration for territory mechanics, map-based gameplay and GPS-based tracking. Do not directly replicate its interface. run.io must have its own visual identity and user experience.

---

## 2. Target Audience

- Students and young adults.
- Casual runners and joggers.
- Fitness enthusiasts.
- People interested in competitive multiplayer games.
- Groups of friends who enjoy outdoor activities.

The interface should feel approachable to beginners while retaining enough competitive depth to engage experienced players.

---

## 3. Design Philosophy

The application should feel like a combination of a premium fitness tracker and a modern multiplayer strategy game.

Priorities:

1. Map-first experience.
2. Clear visual hierarchy.
3. Minimal interface clutter.
4. Strong and meaningful visual feedback.
5. Fast navigation.
6. Consistent components.
7. Mobile-first design.
8. Smooth transitions and animations.

Avoid generic dashboard templates and conventional fitness app layouts.

The map and territory system must remain the central visual identity of the application.

---

## 4. Visual Identity

### Colour Palette

| Name | Hex |
|---|---|
| Background | #0B0F0E |
| Surface | #141B18 |
| Elevated Surface | #1C2521 |
| Primary | #B7F34A |
| Secondary | #79C83D |
| Primary Text | #F5F7F4 |
| Secondary Text | #929D96 |
| Border | #29332D |
| Danger | #FF5B5B |

### Colour Usage

- Primary green: Important actions, active states, progress and player territory.
- Background: Main application background.
- Surface: Cards, panels and bottom sheets.
- White: Headings and important information.
- Secondary grey: Supporting information.
- Red: Destructive actions and warnings.

Do not overuse accent colours.

---

## 5. Typography

Preferred fonts:

- Inter
- Plus Jakarta Sans

Typography hierarchy:

- Large headings: Bold, 28–32px.
- Section headings: Semibold, 20–24px.
- Card headings: Semibold, 16–18px.
- Body: Regular, 14–16px.
- Supporting text: 12–14px.
- Statistics: Bold, large and highly readable.

Use consistent font weights and spacing.

---

## 6. Component Design

### Buttons

- Rounded corners.
- Primary buttons use electric lime.
- Secondary buttons use elevated dark surfaces.
- Destructive buttons use red.
- Clear pressed, disabled and loading states.

### Cards

- Dark elevated surfaces.
- Subtle borders.
- Consistent internal padding.
- Rounded corners.
- Avoid excessive shadows.

### Navigation

Use a five-item bottom navigation bar:

1. Home
2. Explore
3. Parties
4. Leaderboard
5. Profile

The active tab must be clearly distinguishable.

### Modals and Bottom Sheets

Use bottom sheets for contextual actions such as:

- Territory information.
- Player information.
- Party invitations.
- Run confirmation.
- Competition details.

---

## 7. Application Structure

### Authentication

- Splash Screen
- Welcome Screen
- Login
- Registration
- Profile Setup

### Home

The home screen is the primary entry point.

It should contain:

- Interactive map.
- Current player location.
- Territory ownership overlays.
- Nearby competitors.
- Territory statistics.
- Quick-start running action.
- Party notifications.

The map should occupy the majority of the screen.

### Explore

Users can explore the geographical territory map.

Features:

- View captured territories.
- Identify territory owners.
- View competing players.
- Inspect territory information.
- Switch map visualization modes.

### Running

The running interface should be distraction-free.

Display:

- Running duration.
- Distance travelled.
- Current pace.
- Territory being captured.
- GPS route.
- Pause and resume controls.
- End run control.

Use a full-screen map with floating information panels.

### Parties

Users can create or join competitions.

Party creation settings:

- Party name.
- Public or private visibility.
- Game mode.
- Competition duration.
- Maximum participants.
- Invitation code.

Support preset durations including 10, 20 and 30 minutes, 1 hour and longer durations, alongside custom durations.

Party screens:

- Party Discovery.
- Create Party.
- Join Party.
- Party Lobby.
- Party Leaderboard.
- Party Results.

The party leader controls competition settings and can start the competition.

### Leaderboard

Provide three categories:

- Global.
- Nearby.
- Party.

Leaderboard entries should display:

- Rank.
- Avatar.
- Username.
- Territory captured.
- Distance travelled.
- Score.

Highlight the current user's position.

### Profile

Display:

- Avatar.
- Username.
- Player level.
- Total distance.
- Total territory captured.
- Number of runs.
- Wins.
- Achievements.
- Recent activities.

---

## 8. Territory Visualization

Territory ownership is a core feature.

Use visually distinguishable player colours.

The current player's territory should use the primary lime colour.

Other players should have distinguishable secondary colours.

Support two possible visualization modes:

### Territory Mode

Displays actual captured geographical boundaries.

### Grid Mode

Displays a hexagonal grid representing territory ownership.

Territory boundaries should be translucent so that roads and geographical information remain visible.

When a user selects a territory, display its owner and relevant statistics in a bottom sheet.

---

## 9. Interaction Design

- Buttons should provide visual feedback.
- Screen transitions should be smooth.
- Map interactions should feel natural.
- Important actions should have confirmation states.
- Running controls should be easy to access.
- Loading, empty and error states must be designed.
- Use subtle animations for territory capture and leaderboard changes.

Avoid unnecessary animations that distract from the gameplay.

---

## 10. Technical Guidelines

Framework: React Native.

Development platform: Expo.

Language: TypeScript.

Navigation: Expo Router.

State management: Zustand.

Maps: React Native Maps initially.

Icons: Lucide React Native.

Animations: React Native Reanimated.

Use reusable components and a modular folder structure.

Keep mock data separate from UI components.

Use simulated GPS coordinates, routes, territories and player information for the initial prototype.

Do not implement a real backend or multiplayer synchronization during the initial design phase.

---

## 11. Prototype Requirements

The first prototype should demonstrate the complete user journey.

A user should be able to:

1. Open the application.
2. Complete simulated onboarding.
3. Enter the home dashboard.
4. Explore the territory map.
5. Start a simulated run.
6. View a running route and statistics.
7. End the run and see results.
8. Create a party.
9. Join a party.
10. View the party lobby.
11. Explore leaderboards.
12. View personal statistics.

All screens should be connected through working navigation.

Use realistic mock data to make the application feel populated.

---

## 12. Design Restrictions

- Do not use generic AI-generated dashboard designs.
- Do not introduce random colours.
- Do not use inconsistent typography.
- Do not create unnecessarily large cards.
- Do not overcrowd the map.
- Do not use excessive gradients.
- Do not make every component heavily rounded.
- Do not change the established design system without approval.
- Do not duplicate the reference application's branding or exact interface.
- Do not leave major screens as empty placeholders.

Maintain visual consistency across the entire application.

---

## 13. Final Design Goal

run.io should feel like a polished, competitive, map-based fitness game.

The experience should motivate users to go outside, explore their surroundings, capture territory and compete with friends.

The interface should communicate the central idea immediately:

Every run counts. Every territory matters.
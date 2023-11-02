function EvolveFluffy()
{
    if (Fluffy.currentLevel < 10) return;
    if (game.global.challengeActive == "Daily" && !getPageSetting("FluffyEvolveDaily")) return;
    if (game.global.world >= getPageSetting("MinFluffyEvolveZ") && (getPageSetting("MaxFluffyEvolveZ") == -1 || game.global.world < getPageSetting("MaxFluffyEvolveZ"))) {
        Fluffy.prestige();
        debug("Evolve Fluffy to Evolve " + Fluffy.getCurrentPrestige());
    }
}
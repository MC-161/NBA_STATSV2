import { useLocation } from "react-router-dom";
import TabsSection from "./TabsSection";
import usePlayerAndGame from "@/hooks/usePlayerAndGames";
import Loader from "../utils/LoadingPage";
import { PlayerGameData } from "@/types/Dash/PlayerDash";
const PlayerDash = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const playerId = queryParams.get("id");
  // const { playerData, gameData, loading, error } = usePlayerAndGame(playerId);
  // // "2871601440"
  
  // if (loading) return <div><Loader/></div>;
  // if (error) return <div>Error: {error.message}</div>;

  // if (!playerData) return <div>No player data available</div>;
  // if (!gameData) return <div>No game data available</div>;


  const playerData = {
    playerStats: {
      _id: "2871601440",
      name: "LeBron James",
      stats: [
        {"2005": {
          "year": 2005,
          "age": 19,
          "tm": "ORL",
          "g": 82,
          "gs": 82,
          "mp": 2670,
          "fg": 352,
          "fga": 677,
          "fg_pct": 0.52,
          "3p": 0,
          "3pa": 2,
          "3p_pct": 0,
          "2p": 352,
          "2pa": 675,
          "2p_pct": 0.521,
          "efg_pct": 0.52,
          "ft": 277,
          "fta": 413,
          "ft_pct": 0.671,
          "orb": 287,
          "drb": 536,
          "trb": 823,
          "ast": 75,
          "stl": 77,
          "blk": 136,
          "tov": 165,
          "pf": 232,
          "pts": 981
        },
        "2006": {
          "year": 2006,
          "age": 20,
          "tm": "ORL",
          "g": 82,
          "gs": 81,
          "mp": 3021,
          "fg": 468,
          "fga": 881,
          "fg_pct": 0.531,
          "3p": 0,
          "3pa": 2,
          "3p_pct": 0,
          "2p": 468,
          "2pa": 879,
          "2p_pct": 0.532,
          "efg_pct": 0.531,
          "ft": 356,
          "fta": 598,
          "ft_pct": 0.595,
          "orb": 288,
          "drb": 734,
          "trb": 1022,
          "ast": 125,
          "stl": 65,
          "blk": 115,
          "tov": 217,
          "pf": 277,
          "pts": 1292
        },
        "2007": {
          "year": 2007,
          "age": 21,
          "tm": "ORL",
          "g": 82,
          "gs": 82,
          "mp": 3023,
          "fg": 526,
          "fga": 873,
          "fg_pct": 0.603,
          "3p": 1,
          "3pa": 2,
          "3p_pct": 0.5,
          "2p": 525,
          "2pa": 871,
          "2p_pct": 0.603,
          "efg_pct": 0.603,
          "ft": 390,
          "fta": 666,
          "ft_pct": 0.586,
          "orb": 283,
          "drb": 725,
          "trb": 1008,
          "ast": 158,
          "stl": 70,
          "blk": 156,
          "tov": 317,
          "pf": 245,
          "pts": 1443
        },
        "2008": {
          "year": 2008,
          "age": 22,
          "tm": "ORL",
          "g": 82,
          "gs": 82,
          "mp": 3088,
          "fg": 583,
          "fga": 974,
          "fg_pct": 0.599,
          "3p": 0,
          "3pa": 4,
          "3p_pct": 0,
          "2p": 583,
          "2pa": 970,
          "2p_pct": 0.601,
          "efg_pct": 0.599,
          "ft": 529,
          "fta": 897,
          "ft_pct": 0.59,
          "orb": 279,
          "drb": 882,
          "trb": 1161,
          "ast": 110,
          "stl": 74,
          "blk": 176,
          "tov": 263,
          "pf": 274,
          "pts": 1695
        },
        "2009": {
          "year": 2009,
          "age": 23,
          "tm": "ORL",
          "g": 79,
          "gs": 79,
          "mp": 2821,
          "fg": 560,
          "fga": 979,
          "fg_pct": 0.572,
          "3p": 0,
          "3pa": 2,
          "3p_pct": 0,
          "2p": 560,
          "2pa": 977,
          "2p_pct": 0.573,
          "efg_pct": 0.572,
          "ft": 504,
          "fta": 849,
          "ft_pct": 0.594,
          "orb": 336,
          "drb": 757,
          "trb": 1093,
          "ast": 112,
          "stl": 77,
          "blk": 231,
          "tov": 240,
          "pf": 270,
          "pts": 1624
        },
        "2010": {
          "year": 2010,
          "age": 24,
          "tm": "ORL",
          "g": 82,
          "gs": 82,
          "mp": 2843,
          "fg": 510,
          "fga": 834,
          "fg_pct": 0.612,
          "3p": 0,
          "3pa": 7,
          "3p_pct": 0,
          "2p": 510,
          "2pa": 827,
          "2p_pct": 0.617,
          "efg_pct": 0.612,
          "ft": 483,
          "fta": 816,
          "ft_pct": 0.592,
          "orb": 284,
          "drb": 798,
          "trb": 1082,
          "ast": 144,
          "stl": 75,
          "blk": 228,
          "tov": 274,
          "pf": 287,
          "pts": 1503
        },
        "2011": {
          "year": 2011,
          "age": 25,
          "tm": "ORL",
          "g": 78,
          "gs": 78,
          "mp": 2935,
          "fg": 619,
          "fga": 1044,
          "fg_pct": 0.593,
          "3p": 0,
          "3pa": 7,
          "3p_pct": 0,
          "2p": 619,
          "2pa": 1037,
          "2p_pct": 0.597,
          "efg_pct": 0.593,
          "ft": 546,
          "fta": 916,
          "ft_pct": 0.596,
          "orb": 309,
          "drb": 789,
          "trb": 1098,
          "ast": 107,
          "stl": 107,
          "blk": 186,
          "tov": 279,
          "pf": 258,
          "pts": 1784
        },
        "2012": {
          "year": 2012,
          "age": 26,
          "tm": "ORL",
          "g": 54,
          "gs": 54,
          "mp": 2070,
          "fg": 416,
          "fga": 726,
          "fg_pct": 0.573,
          "3p": 0,
          "3pa": 7,
          "3p_pct": 0,
          "2p": 416,
          "2pa": 719,
          "2p_pct": 0.579,
          "efg_pct": 0.573,
          "ft": 281,
          "fta": 572,
          "ft_pct": 0.491,
          "orb": 200,
          "drb": 585,
          "trb": 785,
          "ast": 104,
          "stl": 81,
          "blk": 116,
          "tov": 175,
          "pf": 159,
          "pts": 1113
        },
        "2013": {
          "year": 2013,
          "age": 27,
          "tm": "LAL",
          "g": 76,
          "gs": 76,
          "mp": 2722,
          "fg": 470,
          "fga": 813,
          "fg_pct": 0.578,
          "3p": 1,
          "3pa": 6,
          "3p_pct": 0.167,
          "2p": 469,
          "2pa": 807,
          "2p_pct": 0.581,
          "efg_pct": 0.579,
          "ft": 355,
          "fta": 721,
          "ft_pct": 0.492,
          "orb": 251,
          "drb": 694,
          "trb": 945,
          "ast": 108,
          "stl": 84,
          "blk": 186,
          "tov": 225,
          "pf": 291,
          "pts": 1296
        },
        "2014": {
          "year": 2014,
          "age": 28,
          "tm": "HOU",
          "g": 71,
          "gs": 71,
          "mp": 2396,
          "fg": 473,
          "fga": 800,
          "fg_pct": 0.591,
          "3p": 2,
          "3pa": 7,
          "3p_pct": 0.286,
          "2p": 471,
          "2pa": 793,
          "2p_pct": 0.594,
          "efg_pct": 0.593,
          "ft": 349,
          "fta": 638,
          "ft_pct": 0.547,
          "orb": 231,
          "drb": 635,
          "trb": 866,
          "ast": 131,
          "stl": 60,
          "blk": 128,
          "tov": 229,
          "pf": 240,
          "pts": 1297
        },
        "2015": {
          "year": 2015,
          "age": 29,
          "tm": "HOU",
          "g": 41,
          "gs": 41,
          "mp": 1223,
          "fg": 251,
          "fga": 423,
          "fg_pct": 0.593,
          "3p": 1,
          "3pa": 2,
          "3p_pct": 0.5,
          "2p": 250,
          "2pa": 421,
          "2p_pct": 0.594,
          "efg_pct": 0.595,
          "ft": 143,
          "fta": 271,
          "ft_pct": 0.528,
          "orb": 110,
          "drb": 321,
          "trb": 431,
          "ast": 50,
          "stl": 28,
          "blk": 53,
          "tov": 115,
          "pf": 137,
          "pts": 646
        },
        "2016": {
          "year": 2016,
          "age": 30,
          "tm": "HOU",
          "g": 71,
          "gs": 71,
          "mp": 2280,
          "fg": 372,
          "fga": 600,
          "fg_pct": 0.62,
          "3p": 0,
          "3pa": 6,
          "3p_pct": 0,
          "2p": 372,
          "2pa": 594,
          "2p_pct": 0.626,
          "efg_pct": 0.62,
          "ft": 232,
          "fta": 474,
          "ft_pct": 0.489,
          "orb": 238,
          "drb": 597,
          "trb": 835,
          "ast": 98,
          "stl": 69,
          "blk": 113,
          "tov": 166,
          "pf": 219,
          "pts": 976
        },
        "2017": {
          "year": 2017,
          "age": 31,
          "tm": "ATL",
          "g": 74,
          "gs": 74,
          "mp": 2199,
          "fg": 388,
          "fga": 613,
          "fg_pct": 0.633,
          "3p": 0,
          "3pa": 2,
          "3p_pct": 0,
          "2p": 388,
          "2pa": 611,
          "2p_pct": 0.635,
          "efg_pct": 0.633,
          "ft": 226,
          "fta": 424,
          "ft_pct": 0.533,
          "orb": 296,
          "drb": 644,
          "trb": 940,
          "ast": 104,
          "stl": 64,
          "blk": 92,
          "tov": 170,
          "pf": 203,
          "pts": 1002
        },
        "2018": {
          "year": 2018,
          "age": 32,
          "tm": "CHO",
          "g": 81,
          "gs": 81,
          "mp": 2463,
          "fg": 506,
          "fga": 911,
          "fg_pct": 0.555,
          "3p": 1,
          "3pa": 7,
          "3p_pct": 0.143,
          "2p": 505,
          "2pa": 904,
          "2p_pct": 0.559,
          "efg_pct": 0.556,
          "ft": 334,
          "fta": 582,
          "ft_pct": 0.574,
          "orb": 255,
          "drb": 757,
          "trb": 1012,
          "ast": 105,
          "stl": 48,
          "blk": 131,
          "tov": 208,
          "pf": 249,
          "pts": 1347
        },
        "2019": {
          "year": 2019,
          "age": 33,
          "tm": "WAS",
          "g": 9,
          "gs": 9,
          "mp": 230,
          "fg": 43,
          "fga": 69,
          "fg_pct": 0.623,
          "3p": 0,
          "3pa": 0,
          "3p_pct": 0,
          "2p": 43,
          "2pa": 69,
          "2p_pct": 0.623,
          "efg_pct": 0.623,
          "ft": 29,
          "fta": 48,
          "ft_pct": 0.604,
          "orb": 24,
          "drb": 59,
          "trb": 83,
          "ast": 4,
          "stl": 7,
          "blk": 4,
          "tov": 16,
          "pf": 34,
          "pts": 115
        },
        "2020": {
          "year": 2020,
          "age": 34,
          "tm": "LAL",
          "g": 69,
          "gs": 2,
          "mp": 1306,
          "fg": 202,
          "fga": 277,
          "fg_pct": 0.729,
          "3p": 3,
          "3pa": 5,
          "3p_pct": 0.6,
          "2p": 199,
          "2pa": 272,
          "2p_pct": 0.732,
          "efg_pct": 0.735,
          "ft": 110,
          "fta": 214,
          "ft_pct": 0.514,
          "orb": 172,
          "drb": 335,
          "trb": 507,
          "ast": 45,
          "stl": 31,
          "blk": 79,
          "tov": 84,
          "pf": 222,
          "pts": 517
        },
        "2021": {
          "year": 2021,
          "age": 35,
          "tm": "PHI",
          "g": 69,
          "gs": 6,
          "mp": 1196,
          "fg": 178,
          "fga": 303,
          "fg_pct": 0.587,
          "3p": 5,
          "3pa": 20,
          "3p_pct": 0.25,
          "2p": 173,
          "2pa": 283,
          "2p_pct": 0.611,
          "efg_pct": 0.596,
          "ft": 121,
          "fta": 210,
          "ft_pct": 0.576,
          "orb": 190,
          "drb": 390,
          "trb": 580,
          "ast": 61,
          "stl": 30,
          "blk": 62,
          "tov": 112,
          "pf": 200,
          "pts": 482
        },
        "2024": {
          "year": 2022,
          "age": 36,
          "tm": "LAL",
          "g": 60,
          "gs": 27,
          "mp": 971,
          "fg": 134,
          "fga": 219,
          "fg_pct": 0.612,
          "3p": 8,
          "3pa": 15,
          "3p_pct": 0.533,
          "2p": 126,
          "2pa": 204,
          "2p_pct": 0.618,
          "efg_pct": 0.63,
          "ft": 96,
          "fta": 146,
          "ft_pct": 0.658,
          "orb": 118,
          "drb": 238,
          "trb": 356,
          "ast": 35,
          "stl": 34,
          "blk": 36,
          "tov": 47,
          "pf": 115,
          "pts": 372
        }
      },],
      createdAt: "2024-07-07T15:32:34.036Z",
      updatedAt: "2024-07-07T15:32:34.036Z",
      __v: 0,
    },
    playerImgBio: {
      statusCode: 200,
      body: {
        espnID: "1966",
        espnName: "LeBron James",
        nbaComName: "LeBron James",
        college: "—",
        weight: "250",
        nbaComHeadshot:
          "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        jerseyNum: "23",
        team: "LAL",
        bDay: "12/30/1984",
        espnHeadshot:
          "https://a.espncdn.com/i/headshots/nba/players/full/1966.png",
        nbaComID: "2544",
        height: "6-9",
        lastGamePlayed: "20240429_LAL@DEN",
        pos: "SF",
        exp: "21",
        stats: {
          blk: "38",
          fga: "1290",
          DefReb: "467",
          ast: "593",
          ftp: "75.1",
          tptfgp: "40.9",
          tptfgm: "149",
          stl: "91",
          fgm: "695",
          pts: "1846",
          reb: "529",
          fgp: "53.9",
          fta: "409",
          mins: "2543",
          trueShootingAttempts: "1470.0",
          gamesPlayed: "72",
          TOV: "250",
          tptfga: "364",
          OffReb: "62",
          ftm: "307",
        },
        // Added fields
        espnLink: "https://www.espn.com/nba/player/_/id/1966",
        fantasyProsLink:
          "https://www.fantasypros.com/nba/players/lebron-james.php",
        yahooLink: "https://sports.yahoo.com/nba/players/2544",
      },
    },
  };

  const gameData: PlayerGameData = {
    // "20240429_LAL@DEN": {
    //   blk: "0",
    //   OffReb: "1",
    //   ftp: "71.4",
    //   DefReb: "8",
    //   plusMinus: "+3",
    //   stl: "4",
    //   pts: "30",
    //   tech: "0",
    //   team: "LAL",
    //   TOV: "1",
    //   fga: "21",
    //   ast: "11",
    //   tptfgp: "42.9",
    //   teamAbv: "LAL",
    //   mins: "44",
    //   fgm: "11",
    //   fgp: "52.4",
    //   reb: "9",
    //   teamID: "14",
    //   tptfgm: "3",
    //   fta: "7",
    //   tptfga: "7",
    //   longName: "LeBron James",
    //   PF: "4",
    //   playerID: "2871601440",
    //   ftm: "5",
    //   gameID: "20240429_LAL@DEN",
    //   fantasyPoints: "68.75"
    // },
    // "20240427_DEN@LAL": {
    //   blk: "1",
    //   OffReb: "1",
    //   ftp: "100.0",
    //   DefReb: "4",
    //   plusMinus: "+1",
    //   stl: "3",
    //   pts: "30",
    //   tech: "0",
    //   team: "LAL",
    //   TOV: "6",
    //   fga: "23",
    //   ast: "4",
    //   tptfgp: "0.0",
    //   teamAbv: "LAL",
    //   mins: "39",
    //   fgm: "14",
    //   fgp: "60.9",
    //   reb: "5",
    //   teamID: "14",
    //   tptfgm: "0",
    //   fta: "2",
    //   tptfga: "2",
    //   longName: "LeBron James",
    //   PF: "0",
    //   playerID: "2871601440",
    //   ftm: "2",
    //   gameID: "20240427_DEN@LAL",
    //   fantasyPoints: "48.25"
    // },
    // "20240425_GSW@BOS": {
    //   blk: "2",
    //   OffReb: "3",
    //   ftp: "80.0",
    //   DefReb: "7",
    //   plusMinus: "-5",
    //   stl: "5",
    //   pts: "25",
    //   tech: "1",
    //   team: "GSW",
    //   TOV: "3",
    //   fga: "18",
    //   ast: "6",
    //   tptfgp: "50.0",
    //   teamAbv: "GSW",
    //   mins: "42",
    //   fgm: "9",
    //   fgp: "50.0",
    //   reb: "10",
    //   teamID: "5",
    //   tptfgm: "4",
    //   fta: "8",
    //   tptfga: "8",
    //   longName: "Stephen Curry",
    //   PF: "2",
    //   playerID: "2871601450",
    //   ftm: "6",
    //   gameID: "20240425_GSW@BOS",
    //   fantasyPoints: "56.50"
    // },
    // "20240424_BOS@GSW": {
    //   blk: "1",
    //   OffReb: "2",
    //   ftp: "75.0",
    //   DefReb: "6",
    //   plusMinus: "+8",
    //   stl: "2",
    //   pts: "22",
    //   tech: "0",
    //   team: "BOS",
    //   TOV: "4",
    //   fga: "20",
    //   ast: "8",
    //   tptfgp: "33.3",
    //   teamAbv: "BOS",
    //   mins: "39",
    //   fgm: "8",
    //   fgp: "40.0",
    //   reb: "8",
    //   teamID: "6",
    //   tptfgm: "2",
    //   fta: "5",
    //   tptfga: "6",
    //   longName: "Jayson Tatum",
    //   PF: "1",
    //   playerID: "2871601460",
    //   ftm: "3",
    //   gameID: "20240424_BOS@GSW",
    //   fantasyPoints: "48.00"
    // },
    // "20240422_MIA@PHI": {
    //   blk: "1",
    //   OffReb: "4",
    //   ftp: "66.7",
    //   DefReb: "9",
    //   plusMinus: "+6",
    //   stl: "3",
    //   pts: "27",
    //   tech: "0",
    //   team: "MIA",
    //   TOV: "5",
    //   fga: "22",
    //   ast: "5",
    //   tptfgp: "25.0",
    //   teamAbv: "MIA",
    //   mins: "41",
    //   fgm: "10",
    //   fgp: "45.5",
    //   reb: "13",
    //   teamID: "7",
    //   tptfgm: "1",
    //   fta: "6",
    //   tptfga: "4",
    //   longName: "Jimmy Butler",
    //   PF: "3",
    //   playerID: "2871601470",
    //   ftm: "4",
    //   gameID: "20240422_MIA@PHI",
    //   fantasyPoints: "52.75"
    // },
    // "20240420_PHX@CLE": {
    //   blk: "3",
    //   OffReb: "2",
    //   ftp: "85.0",
    //   DefReb: "6",
    //   plusMinus: "+4",
    //   stl: "1",
    //   pts: "32",
    //   tech: "0",
    //   team: "PHX",
    //   TOV: "2",
    //   fga: "24",
    //   ast: "7",
    //   tptfgp: "36.4",
    //   teamAbv: "PHX",
    //   mins: "45",
    //   fgm: "12",
    //   fgp: "50.0",
    //   reb: "8",
    //   teamID: "8",
    //   tptfgm: "4",
    //   fta: "10",
    //   tptfga: "11",
    //   longName: "Devin Booker",
    //   PF: "1",
    //   playerID: "2871601480",
    //   ftm: "8",
    //   gameID: "20240420_PHX@CLE",
    //   fantasyPoints: "63.50"
    // },
    // "20240418_CLE@PHX": {
    //   blk: "2",
    //   OffReb: "3",
    //   ftp: "70.0",
    //   DefReb: "8",
    //   plusMinus: "-3",
    //   stl: "2",
    //   pts: "28",
    //   tech: "0",
    //   team: "CLE",
    //   TOV: "4",
    //   fga: "23",
    //   ast: "6",
    //   tptfgp: "33.3",
    //   teamAbv: "CLE",
    //   mins: "43",
    //   fgm: "11",
    //   fgp: "47.8",
    //   reb: "11",
    //   teamID: "9",
    //   tptfgm: "3",
    //   fta: "7",
    //   tptfga: "9",
    //   longName: "Darius Garland",
    //   PF: "3",
    //   playerID: "2871601490",
    //   ftm: "5",
    //   gameID: "20240418_CLE@PHX",
    //   fantasyPoints: "55.25"
    // },
    // "20240416_LAL@DEN": {
    //   blk: "0",
    //   OffReb: "2",
    //   ftp: "60.0",
    //   DefReb: "10",
    //   plusMinus: "-2",
    //   stl: "1",
    //   pts: "20",
    //   tech: "0",
    //   team: "LAL",
    //   TOV: "4",
    //   fga: "19",
    //   ast: "7",
    //   tptfgp: "20.0",
    //   teamAbv: "LAL",
    //   mins: "40",
    //   fgm: "8",
    //   fgp: "42.1",
    //   reb: "12",
    //   teamID: "14",
    //   tptfgm: "1",
    //   fta: "5",
    //   tptfga: "5",
    //   longName: "Anthony Davis",
    //   PF: "4",
    //   playerID: "2871601500",
    //   ftm: "3",
    //   gameID: "20240416_LAL@DEN",
    //   fantasyPoints: "39.75"
    // },
    // "20240414_DEN@LAL": {
    //   blk: "1",
    //   OffReb: "1",
    //   ftp: "77.8",
    //   DefReb: "5",
    //   plusMinus: "+4",
    //   stl: "2",
    //   pts: "22",
    //   tech: "0",
    //   team: "DEN",
    //   TOV: "3",
    //   fga: "21",
    //   ast: "5",
    //   tptfgp: "50.0",
    //   teamAbv: "DEN",
    //   mins: "38",
    //   fgm: "9",
    //   fgp: "42.9",
    //   reb: "6",
    //   teamID: "15",
    //   tptfgm: "3",
    //   fta: "8",
    //   tptfga: "6",
    //   longName: "Nikola Jokic",
    //   PF: "1",
    //   playerID: "2871601510",
    //   ftm: "7",
    //   gameID: "20240414_DEN@LAL",
    //   fantasyPoints: "50.25"
    // },
    // "20240412_LAL@DEN": {
    //   blk: "0",
    //   OffReb: "3",
    //   ftp: "85.7",
    //   DefReb: "7",
    //   plusMinus: "+2",
    //   stl: "3",
    //   pts: "29",
    //   tech: "0",
    //   team: "LAL",
    //   TOV: "2",
    //   fga: "20",
    //   ast: "8",
    //   tptfgp: "42.9",
    //   teamAbv: "LAL",
    //   mins: "44",
    //   fgm: "11",
    //   fgp: "52.4",
    //   reb: "10",
    //   teamID: "14",
    //   tptfgm: "3",
    //   fta: "7",
    //   tptfga: "7",
    //   longName: "LeBron James",
    //   PF: "3",
    //   playerID: "2871601440",
    //   ftm: "6",
    //   gameID: "20240412_LAL@DEN",
    //   fantasyPoints: "64.25"
    // },
    // "20240410_DEN@LAL": {
    //   blk: "1",
    //   OffReb: "2",
    //   ftp: "66.7",
    //   DefReb: "8",
    //   plusMinus: "-4",
    //   stl: "2",
    //   pts: "23",
    //   tech: "1",
    //   team: "DEN",
    //   TOV: "5",
    //   fga: "22",
    //   ast: "4",
    //   tptfgp: "28.6",
    //   teamAbv: "DEN",
    //   mins: "41",
    //   fgm: "9",
    //   fgp: "40.9",
    //   reb: "10",
    //   teamID: "15",
    //   tptfgm: "2",
    //   fta: "6",
    //   tptfga: "7",
    //   longName: "Jamal Murray",
    //   PF: "2",
    //   playerID: "2871601520",
    //   ftm: "4",
    //   gameID: "20240410_DEN@LAL",
    //   fantasyPoints: "47.75"
    // },
    // "20240408_LAL@DEN": {
    //   blk: "2",
    //   OffReb: "2",
    //   ftp: "75.0",
    //   DefReb: "9",
    //   plusMinus: "+5",
    //   stl: "3",
    //   pts: "31",
    //   tech: "0",
    //   team: "LAL",
    //   TOV: "3",
    //   fga: "20",
    //   ast: "9",
    //   tptfgp: "36.4",
    //   teamAbv: "LAL",
    //   mins: "44",
    //   fgm: "12",
    //   fgp: "50.0",
    //   reb: "11",
    //   teamID: "14",
    //   tptfgm: "4",
    //   fta: "8",
    //   tptfga: "11",
    //   longName: "Anthony Davis",
    //   PF: "2",
    //   playerID: "2871601500",
    //   ftm: "6",
    //   gameID: "20240408_LAL@DEN",
    //   fantasyPoints: "62.00"
    // }
  };

  const [firstname, lastname] =
    playerData.playerImgBio.body.nbaComName.split(" ");
  return (
    <div className="bg-black">
      <section className="banner w-full h-72 Searchbg"></section>
      <section className="tabs_Wrapper grid grid-cols-1 relative h-32 w-full text-primary-main -mt-20">
        <div className="placeholdn h-10 ml-72">
          <p className="fName text-sm font-extralight">{firstname}</p>
          <p className="lName font-bold text-2xl">{lastname}</p>
        </div>
        <img
          className="w-32 absolute left-40 md:left-80 md:bottom-6 lg:left-36 border-2 rounded-lg pt-3"
          src={
            playerData.playerImgBio.body.nbaComHeadshot ||
            "https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png"
          }
          alt=""
        />
        <div className="">
          <TabsSection playerData={playerData} gameData={gameData} />
        </div>
      </section>
    </div>
  );
};

export default PlayerDash;

<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('articles')->insert([
            ['name' => 'What\'s new in C# 7.3', 
            'description' => "There are two main themes to the C# 7.3 release. One theme provides features that enable safe code to be as performant as unsafe code. The second theme provides incremental improvements to existing features. In addition, new compiler options were added in this release.",                    
            'text' => "The following new features support the theme of better performance for safe code:
                You can access fixed fields without pinning.
                You can reassign ref local variables.
                You can use initializers on stackalloc arrays.
                You can use fixed statements with any type that supports a pattern.
                You can use additional generic constraints.
                The following enhancements were made to existing features:
                You can test == and != with tuple types.
                You can use expression variables in more locations.
                You may attach attributes to the backing field of auto-implemented properties.
                Method resolution when arguments differ by in has been improved.
                Overload resolution now has fewer ambiguous cases.",
              'img' => "c.png",
              'user_id' => 1,
              'category_id' => 1,
        ],

        ['name' => "Cyberpunk 2077's In-Game Keanu Reeves Band Will Be Portrayed By Refused", 
            'description' => "Cyberpunk 2077's fictional in-game band, Samurai, will be portrayed by none other than Swedish punk band Refused. CD Projekt Red announced the partnership today, confirming that Refused will write, record, and produce an EP of Samurai's greatest hits.",                    
            'text' => "The songs will include tunes inspired by the Cyberpunk 2020 source material, along with brand-new songs that Refused wrote for the game. That's a big deal because Refused haven't released new music since 2015's Freedom album.
            You can listen to the new Refused song Chippin' In through the YouTube embed above.
            If it sounds familiar, that's because it's the song that played as Keanu Reeves walked onto the stage during Microsoft's E3 2019 briefing; apparently no one noticed it was a new song.
            Reeves plays the character Johnny Silverhand in Cyberpunk 2077; he's the singer and guitarist for the band Samurai. In June, Reeves cryptically said he wouldn't do any singing in Cyberpunk 2077, and now we know it's because Refused did the music.
            CD Projekt Red's music director, Marcin Przybyłowicz, said the Polish studio has a lot of Refused fans within it. One of the game's composers, Piotr Adamczyk, is a big fan of the group, and it was his idea to approach Refused for the collaboration.
            I'm very happy he did, because the massive riffs, powerful drums, and hard-hitting vocals the guys from Refused deliver as Samurai have blown me away, Przybyłowicz said. I can wholeheartedly say the punk factor of Cyberpunk 2077's music is through the roof!
            Refused lead singer Dennis Lyxzén said, Like us, Samurai is a group of rebels, albeit in a different time and place. Working together with CD Projekt Red, writing music and song lyrics for Cyberpunk's chrome rock icon was fun, but also very different in the creative sense. It was an unexpected challenge that turned out to be right up our alley and really got us going. The songs turned out great and the game looks insane.
            This is not the first time the band Refused has been connected to video games.Bethesda used the band's biggest song, New Noise,for its Fight Like Hell trailer for Doom.
            Cyberpunk 2077 releases on April 16, 2020 for PlayStation 4, Xbox One, and PC.",
              'img' => "keanu.jpeg",
              'user_id' => 1,
              'category_id' => 6,
        ],

        ]);
    }
}

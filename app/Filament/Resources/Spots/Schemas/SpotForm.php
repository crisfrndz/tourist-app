<?php

namespace App\Filament\Resources\Spots\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class SpotForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                Textarea::make('description')
                    ->columnSpanFull(),
                TextInput::make('category'),
                TextInput::make('display_order')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('latitude')
                    ->numeric(),
                TextInput::make('longitude')
                    ->numeric(),
                Toggle::make('is_featured')
                ->label('Featured?')
                    ->required(),
                Toggle::make('is_active')
                    ->label('Active?')
                    ->required(),
                FileUpload::make('image_cover_path')
                    ->label("Cover")
                    ->image()
                    ->required(),
            ]);
    }
}
